import api from "../services/api";
import { LOGIN, SET_CURRENT_USER, ASYNC_START } from "./types";

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const login = (username, password) => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.login(username, password).then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const signup = (username, password) => dispatch => {
  dispatch({ type: ASYNC_START });
  api.auth.signup(username, password).then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};
