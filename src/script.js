import { createStore } from "redux";
import profileReducer from "./profileReducer";

const store = createStore(profileReducer);
store.subscribe(() => {
  console.log("subscribed.");
  updateUser();
});

const addProfileForm = document.querySelector("#addProfileForm");

addProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userId = document.querySelector("#userId").value;
  const userName = document.querySelector("#userName").value;
  const userAge = document.querySelector("#userAge").value;

  const user = {
    id: userId,
    name: userName,
    age: userAge,
  };
  if (user) {
    console.log(user);
    store.dispatch({ type: "ADD_PROFILE", payload: user });
    store.dispatch({ type: "CALCULATE_AVERAGE_AGE" });
  }

  addProfileForm.reset();
});

const removeProfileForm = document.querySelector("#removeProfileForm");
removeProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const removeProfileId = document.querySelector("#removeProfileId").value;
  store.dispatch({ type: "REMOVE_PROFILE", payload: removeProfileId });
  store.dispatch({ type: "CALCULATE_AVERAGE_AGE" });
  removeProfileForm.reset();
});

const updateUser = () => {
  const result = document.querySelector("#result");
  const state = store.getState();
  console.log(state);

  const userListHTML = state.userList
    .map((user) => `<li>${user.id}. ${user.name} (${user.age} years old)</li>`)
    .join("");

  const averageAgeHTML = `<p><strong>Average Age:</strong> ${state.averageAge}</p>`;

  result.innerHTML = `<ul>${userListHTML}</ul>${averageAgeHTML}`;
};
