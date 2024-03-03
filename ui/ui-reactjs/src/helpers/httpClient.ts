import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',//process.env.server,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});