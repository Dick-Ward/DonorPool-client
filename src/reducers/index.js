import { combineReducers } from "redux";

const userReducer = (state = { loggedIn: false }, action) => {
  if (action.type === "SET_CURRENT_USER") {
    return {
      ...state,
      username: action.user.user_name,
      loggedIn: true
    };
  } else {
    return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer
});
