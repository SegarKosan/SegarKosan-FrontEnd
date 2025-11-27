import axios from "axios";

const API_URL = "https://64f5ed0bc73a.ngrok-free.app"; // backend Express

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
