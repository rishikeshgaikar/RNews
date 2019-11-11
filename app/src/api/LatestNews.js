import {Token} from './Token';
import axios from 'axios';
export default async function LatestNews(query) {
  let result = null;
  await axios
    .get(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${Token}`)
    .then(response => {
      console.log(response);
      result = response;
    })
    .catch(error => console.log(error));
  return result;
}
