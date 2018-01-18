import api from "../services/api";
import {
  SET_CURRENT_USER,
  ASYNC_START,
  LOG_OUT,
  HANDLE_SEARCH,
  SEARCH_VIEW,
  UPDATES_VIEW,
  INDIVIDUAL_CHARITY_VIEW,
  RESET_SEARCH
} from "./types";

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const login = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.login(username, password).then(user => {
    localStorage.setItem("token", user.token);
    dispatch({ type: SET_CURRENT_USER, user });
    history.push("/");
  });
};

export const signup = (
  username,
  password,
  email,
  firstName,
  lastName,
  history
) => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.signup(username, password, email, firstName, lastName).then(user => {
    localStorage.setItem("token", user.token);
    dispatch({ type: SET_CURRENT_USER, user });
    history.push("/");
  });
};

export const logout = history => dispatch => {
  let user = null;
  localStorage.removeItem("token");
  dispatch({ type: LOG_OUT, user });
  history.push("/login");
};

export const handleSearch = searchQuery => dispatch => {
  dispatch({ type: HANDLE_SEARCH, searchQuery });
};

export const resetSearch = () => dispatch => {
  dispatch({ type: RESET_SEARCH });
};

export const searchView = () => dispatch => {
  dispatch({ type: SEARCH_VIEW });
};

export const updatesView = () => dispatch => {
  dispatch({ type: UPDATES_VIEW });
};

export const individualCharityView = charity => dispatch => {
  dispatch({ type: INDIVIDUAL_CHARITY_VIEW, charity });
};
