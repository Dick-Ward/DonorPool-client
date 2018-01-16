import api from "../services/api";
import {
  SET_CURRENT_USER,
  ASYNC_START,
  SET_FEATURED_USERS,
  SET_RELEVANT_UPDATES,
  LOG_OUT
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

export const signup = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.signup(username, password).then(user => {
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

export const fetchFeatured = () => dispatch => {
  dispatch({ type: ASYNC_START });
  api.views.featuredUsers().then(users => {
    dispatch({ type: SET_FEATURED_USERS, users });
  });
};

export const fetchRelevantUpdates = id => dispatch => {
  dispatch({ type: ASYNC_START });
  api.views.userRelevantUpdates(id).then(updates => {
    dispatch({ type: SET_RELEVANT_UPDATES, updates });
  });
};
