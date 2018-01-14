import api from "../services/api";
import { SET_CURRENT_USER, ASYNC_START } from "./types";

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
  let user = {};
  localStorage.removeItem("token");
  dispatch({ type: SET_CURRENT_USER, user });
  history.push("/login");
};
