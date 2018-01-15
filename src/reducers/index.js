import { combineReducers } from "redux";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.user };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer
});
