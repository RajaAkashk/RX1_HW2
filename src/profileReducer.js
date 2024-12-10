import { ADD_PROFILE, REMOVE_PROFILE, CALCULATE_AVERAGE_AGE } from "./action";

const initialState = { userList: [], averageAge: 0 };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    }
    case REMOVE_PROFILE: {
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };
    }
    case CALCULATE_AVERAGE_AGE: {
      console.log(state.userList.length);
      if (state.userList.length === 0) {
        return {
          ...state,
          averageAge: 0,
        };
      }
      const total = state.userList.reduce(
        (acc, curr) => acc + Number(curr.age),
        0
      );
      const averageAge = (total / state.userList.length).toFixed(2);

      return {
        ...state,
        averageAge,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
