import axios from "axios";

const timeoutMs = 5000;

export const instance = axios.create({
  // baseURL: "http://localhost:5250",
  baseURL: "http://192.168.1.89/api",
  timeout: timeoutMs,
  // signal: abortSignal(timeoutMs),
});
