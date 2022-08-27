import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": ,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
