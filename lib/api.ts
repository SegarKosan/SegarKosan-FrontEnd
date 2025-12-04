import axios from "axios";

const API_URL = "https://segarkosan.testingfothink.my.id"; // backend Express

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
