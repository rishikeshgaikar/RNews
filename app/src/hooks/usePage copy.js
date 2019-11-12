import React, {useState, useEffect} from 'react';
import ListNews from '../api/ListNews';

export default query => {
  const [data, setData] = useState([]);
  const [nextData, setNextData] = useState([]);
  const [isFetching, setIsFetching] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    return ListNews(query)
      .then(result => {
        if (result.status == 200) {
          console.log(result.data.articles);
          setData(result.data.articles);
        }
      })
      .catch(error => console.error(error));
  };

  const onRefresh = () => {};

  return [data];
};
