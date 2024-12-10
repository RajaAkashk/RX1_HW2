import { createStore } from "redux";
import profileReducer from "./profileReducer";
import {
  addProfileAction,
  removeProfileAction,
  avergeAgeAction,
} from "./action";

const store = createStore(profileReducer);
store.subscribe(() => {
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
    store.dispatch(addProfileAction(user));
    store.dispatch(avergeAgeAction());
  }

  addProfileForm.reset();
});

const removeProfileForm = document.querySelector("#removeProfileForm");
removeProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const removeProfileId = document.querySelector("#removeProfileId").value;
  store.dispatch(removeProfileAction(removeProfileId));
  store.dispatch(avergeAgeAction());
  removeProfileForm.reset();
});

const updateUser = () => {
  const result = document.querySelector("#result");
  const state = store.getState();

  const userListHTML = state.userList
    .map((user) => `<li>${user.id}. ${user.name} (${user.age} years old)</li>`)
    .join("");

  const averageAgeHTML = `<p><strong>Average Age:</strong> ${state.averageAge}</p>`;

  result.innerHTML = `<ul>${userListHTML}</ul>${averageAgeHTML}`;
};
