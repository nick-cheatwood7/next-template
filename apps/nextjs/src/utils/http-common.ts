import axios from "axios";

export default axios.create({
  baseURL: process.env.VERCEL_URL || "http://localhost:3000/api",
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});
