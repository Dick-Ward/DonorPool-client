const API_ROOT = "https://glacial-tor-29316.herokuapp.com";

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Acccepts: "application/json",
  Authorization: token
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_name: username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user/`, {
    headers: headers
  }).then(res => res.json());
};

const signup = (user_name, password, email, first_name, last_name) => {
  return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user_name,
      password,
      first_name,
      last_name,
      email
    })
  }).then(res => res.json());
};

const addSupport = (user, charity, amount) => {
  return fetch(`${API_ROOT}/supports`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user_id: user.id,
      charity_id: charity.id,
      amount
    })
  }).then(res => res.json());
};

const changeSupport = (id, donation, user_id) => {
  return fetch(`${API_ROOT}/supports/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      donation,
      user_id
    })
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    signup,
    getCurrentUser
  },
  support: {
    addSupport,
    changeSupport
  }
};
