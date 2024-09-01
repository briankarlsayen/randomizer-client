import axios from "axios";

const timeoutMs = 5000;

export const instance = axios.create({
  baseURL: "http://localhost:5250",
  timeout: timeoutMs,
  // signal: abortSignal(timeoutMs),
});
