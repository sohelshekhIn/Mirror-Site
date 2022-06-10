import axios from "axios";
const API_DOMAIN = "http://localhost:1337";
const API_URL = `${API_DOMAIN}/api`;

export function GetRequest(url) {
  return axios
    .get(API_URL + url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { API_DOMAIN, API_URL };
