import axios from "axios";
import { admin } from "./ApiUri";

const create = (baseUrl) => {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  })

  const apis = {};
  apis.login = (value) => {
    return api.post(admin.login, value);
  }
  apis.logout = (token) => {
    return api.post(admin.logout, {}, {
      headers: {
        Authorization: `bearer ${token}`
      }
    });
  }
  return apis;
}

export default {
  create
}