import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  if (action.type === "SET_CURRENT_USER") {
    return { ...state, user: action.user };
  } else {
    return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer
});
