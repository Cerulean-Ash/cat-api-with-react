import axios from "axios";

export default axios.create({
  baseURL: "https://api.thecatapi.com",
  headers: {
    "x-api-key": "3224c0b6-cb69-4332-8366-4aa0768fce42",
  },
});
