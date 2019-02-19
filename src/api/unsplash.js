import axios from "axios";
const KEY_ID =
  "67a9fd2836d3cbca7bb7904d489737a23153f7cbadf1dc406db8f6ff2749f015";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${KEY_ID}`
  }
});
