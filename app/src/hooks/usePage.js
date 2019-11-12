import React, {useState, useEffect} from 'react';
import ListNews from '../api/ListNews';

export default usePage = query => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    return ListNews(query, page)
      .then(result => {
        if (result.status == 200) {
          const resultData = result.data.articles;
          setData([...data, ...resultData]);
          setPage(page + 1);
          setIsFetching(false);
          setIsRefreshing(false);
        }
      })
      .catch(error => console.error(error));
  };

  const loadMoreData = () => {
    page < 6 ? callApi() : setNoMoreData(true);
  };

  const refreshData = () => {
    setIsFetching(true);
    setIsRefreshing(true);
    setPage(1);
    setData([]);
    callApi();
  };

  return [
    data,
    isFetching,
    isRefreshing,
    noMoreData,
    loadMoreData,
    refreshData,
  ];
};
