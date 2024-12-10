export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const CALCULATE_AVERAGE_AGE = "CALCULATE_AVERAGE_AGE";

export const addProfileAction = (user) => ({
  type: "ADD_PROFILE",
  payload: user,
});

export const removeProfileAction = (id) => ({
  type: "REMOVE_PROFILE",
  payload: id,
});

export const avergeAgeAction = () => ({ type: "CALCULATE_AVERAGE_AGE" });
