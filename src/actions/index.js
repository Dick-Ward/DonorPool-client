import api from "../services/api";

const fetchUser = () => dispatch => {
  dispatch({ type: "ASYNC_START" });
  api.auth.getCurrentUser().then(user => {
    dispatch({ type: "SET_CURRENT_USER", user });
  });
};

export default fetchUser;
