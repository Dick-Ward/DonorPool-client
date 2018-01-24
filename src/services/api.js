const API_ROOT = "http://localhost:3000";

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

const signupCharity = (
  username,
  password,
  charityName,
  tagline,
  URL,
  icon,
  banner,
  mission,
  history
) => {
  return fetch(`${API_ROOT}/users/charity/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      username,
      password,
      charityName,
      tagline,
      URL,
      icon,
      banner,
      mission,
      history
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

const addUpdate = (title, content, picture, charityId) => {
  return fetch(`${API_ROOT}/updates`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      title,
      content,
      picture,
      charityId
    })
  }).then(res => res.json());
};

const editCharity = (id, name, tagline, URL, mission) => {
  return fetch(`${API_ROOT}/charities/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      name,
      tagline,
      URL,
      mission
    })
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    signup,
    getCurrentUser,
    signupCharity
  },
  support: {
    addSupport,
    changeSupport
  },
  manager: {
    addUpdate,
    editCharity
  }
};
