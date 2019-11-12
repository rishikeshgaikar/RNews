import {Token} from './Token';
import axios from 'axios';
export default async function ListNews(query, page) {
  let result = null;
  await axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&page=${page}&apiKey=${Token}`,
    )
    .then(response => {
      console.log(response);
      result = response;
    })

    .catch(error => console.log(error));
  return result;
}
