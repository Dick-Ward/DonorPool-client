const API_ROOT = "http://localhost:3000";

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Acccepts: "application/json",
  Authorization: token
};

const login = (userName, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ userName, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user/`, {
    headers: headers
  }).then(res => res.json());
};

const signup = (userName, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ userName, password })
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    signup,
    getCurrentUser
  }
};
