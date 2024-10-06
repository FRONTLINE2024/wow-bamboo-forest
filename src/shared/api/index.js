import axios from "axios";

import { SERVER_BASE_URL } from "../constants";

export const wowBambooAxios = axios.create({
  baseURL: SERVER_BASE_URL,
});
