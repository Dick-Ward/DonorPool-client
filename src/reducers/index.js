import { combineReducers } from "redux";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.user };
    default:
      return state;
  }
};

const featuredUserReducer = (state = { featuredUsers: [] }, action) => {
  switch (action.type) {
    case "SET_FEATURED_USERS":
      return { ...state, featuredUsers: action.users };
    default:
      return state;
  }
};

const userRelevantUpdateReducer = (state = { updates: [] }, action) => {
  switch (action.type) {
    case "SET_RELEVANT_UPDATES":
      return { ...state, updates: action.updates };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  featured: featuredUserReducer,
  updates: userRelevantUpdateReducer
});
