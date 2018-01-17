import React from "react";
import { combineReducers } from "redux";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import CharityFeedContainer from "../containers/CharityFeedContainer";
import CharityFull from "../components/CharityFull";

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

const activeViewReducer = (
  state = { donorFeed: <SearchResultsContainer /> },
  action
) => {
  switch (action.type) {
    case "SEARCH_VIEW":
      return { ...state, donorFeed: <SearchResultsContainer /> };
    case "UPDATES_VIEW":
      return { ...state, donorFeed: <CharityFeedContainer /> };
    case "INDIVIDUAL_CHARITY_VIEW":
      return { ...state, donorFeed: <CharityFull charity={action.charity} /> };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  views: activeViewReducer
});
