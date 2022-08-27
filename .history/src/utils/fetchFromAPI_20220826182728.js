import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f7c77fb172msh1ef00876340a814p154163jsn8055208d264a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
