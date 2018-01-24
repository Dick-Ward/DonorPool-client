import React from "react";
import { combineReducers } from "redux";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import CharityFeed from "../components/CharityFeed";
import CharityFull from "../components/CharityFull";
import ModifyDonationsContainer from "../containers/ModifyDonationsContainer";
import CharityCard from "../components/charitymanager/CharityCard.js";
import AddUpdate from "../components/charitymanager/AddUpdate.js";
import EditCharity from "../components/charitymanager/EditCharity.js";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        loginError: null,
        ...action.user.data,
        user: { ...action.user.data.user, token: action.user.token }
      };
    case "HANDLE_ERROR":
      return { ...state, error: action.message };
    case "ADD_SUPPORT":
      return {
        ...state,
        user: {
          ...state.user,
          supported: [...state.user.supported, action.charity]
        }
      };
    case "ADD_PLEDGE":
      action.charity.pledge = action.pledge;
      return state;
    case "LOG_OUT":
      return {};
    case "ADD_UPDATES":
      return {
        ...state,
        relevant_updates: [...state.relevant_updates, action.updateToAdd]
      };
    case "CHANGE_PLEDGE":
      action.charity.pledge = action.donation;
      return {
        ...state,
        user: { ...state.user, supported: [...state.user.supported] }
      };

    default:
      return state;
  }
};

const searchReducer = (state = { searchQuery: "" }, action) => {
  switch (action.type) {
    case "HANDLE_SEARCH":
      return { ...state, searchQuery: action.searchQuery };
    case "RESET_SEARCH":
      return { ...state, searchQuery: "" };
    case "CLEAR_SEARCH":
      return { ...state, searchQuery: "" };
    default:
      return state;
  }
};

const activeViewReducer = (
  state = {
    donorFeed: <SearchResultsContainer />,
    managerFeed: <CharityCard />
  },
  action
) => {
  switch (action.type) {
    case "SEARCH_VIEW":
      return {
        ...state,
        donorFeed: <SearchResultsContainer doesUserSupport={action.supports} />
      };
    case "UPDATES_VIEW":
      return {
        ...state,
        donorFeed: <CharityFeed />
      };
    case "MODIFY_DONATIONS_VIEW":
      return {
        ...state,
        donorFeed: <ModifyDonationsContainer />
      };
    case "INDIVIDUAL_CHARITY_VIEW":
      return {
        ...state,
        donorFeed: (
          <CharityFull
            doesUserSupport={action.supports}
            charity={action.charity}
          />
        )
      };
    case "RESET_SEARCH":
      return {
        ...state,
        donorFeed: <CharityFeed />
      };
    case "EDIT_CHARITY_VIEW":
      return {
        ...state,
        managerFeed: <EditCharity />
      };
    case "ADD_UPDATE_VIEW":
      return {
        ...state,
        managerFeed: <AddUpdate />
      };
    case "CHARITY_CARD":
      return {
        ...state,
        managerFeed: <CharityCard />
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  views: activeViewReducer
});
