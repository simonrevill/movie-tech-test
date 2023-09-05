import axios from "axios";

const api = axios.create({
  baseURL: "https://comforting-starlight-f3456a.netlify.app/.netlify/functions",
});

export default api;
