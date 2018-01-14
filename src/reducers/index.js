import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  if (action.type === "SET_CURRENT_USER") {
    return {
      ...state,
      username: action.user.user_name
    };
  } else {
    return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer
});
