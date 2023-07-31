import axios from "axios";

// const serverUrl = "https://www.pre-onboarding-selection-task.shop/";

const devServerUrl = "http://" + window.location.hostname + ":8000/";

async function get(endpoint, params = "") {
  console.log(
    `%cGET 요청 ${devServerUrl + endpoint + "/" + params}`,
    "color: #a25cd1;"
  );

  return axios.get(devServerUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.post(devServerUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { get, post };
