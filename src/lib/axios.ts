import axios from "axios";
import { SetUserLocalStorage } from "../contexts/Auth/Util";

export const api = axios.create({
  baseURL: "https://car-rentar-server-jmok9q027-rodrigosantos009.vercel.app/",
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