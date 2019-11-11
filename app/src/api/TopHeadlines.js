import {Token} from './Token';
import axios from 'axios';
export default async function TopHeadlines() {
  let result = null;
  await axios
    .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${Token}`)
    .then(response => {
      console.log(response);
      result = response;
    })
    .catch(error => console.log(error));
  return result;
}
