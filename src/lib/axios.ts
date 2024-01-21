import axios from "axios";
import { SetUserLocalStorage } from "../contexts/Auth/Util";

export const api = axios.create({
  baseURL: "https://car-rental-server-cfu3.onrender.com",
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