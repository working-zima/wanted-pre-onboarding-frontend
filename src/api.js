import axios from "axios";

const serverUrl = "https://www.pre-onboarding-selection-task.shop/";

// const devServerUrl = "http://" + window.location.hostname + ":8000/";

async function get(endpoint, params = "") {
  return axios.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}

async function del(endpoint, params = "") {
  return axios.delete(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}

export { get, post, put, del as delete };
