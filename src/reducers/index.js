import { combineReducers } from "redux";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        ...action.user.data,
        user: { ...action.user.data.user, token: action.user.token }
      };
    case "LOG_OUT":
      return {};
    default:
      return state;
  }
};

const searchReducer = (state = { searchQuery: "" }, action) => {
  switch (action.type) {
    case "HANDLE_SEARCH":
      return { ...state, searchQuery: action.searchQuery };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer
});
