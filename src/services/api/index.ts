import axios from "axios";

const api = axios.create({
  // api
  baseURL:
    "https://gist.githubusercontent.com/ZeroWhisper/13c5e83def91ff3948db9f777b38bde5/raw/66fdc4471a6bf20d624ffe3f6fd5a928ba3b3d02"
});

export default api;
