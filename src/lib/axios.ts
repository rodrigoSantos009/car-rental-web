import axios from "axios";
import { SetUserLocalStorage } from "../contexts/Auth/Util";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 500) {    
      window.location.href = "/login";
      SetUserLocalStorage(null);
    }
  }
);