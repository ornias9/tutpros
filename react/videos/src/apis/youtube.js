import axios from "axios";

const KEY = "AIzaSyAzQA47EY5oGn4EV3zZyzH4ykPoOie_Nas";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
