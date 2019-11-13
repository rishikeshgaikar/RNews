import React from 'react';
import {FlatList, ActivityIndicator, Button} from 'react-native';
import {ListItem} from '../components';
import usePage from '../hooks/usePage';

export const PagingListView = ({nav, category}) => {
  const [
    data,
    isFetching,
    isRefreshing,
    noMoreData,
    loadMoreData,
    refreshData,
  ] = usePage(category);
  const listFooter = () => {
    if (!noMoreData) {
      return <ActivityIndicator style={{color: '#000', marginVertical: 20}} />;
    } else {
      return <Button title="refresh" onPress={() => refreshData()}></Button>;
    }
  };
  return (
    <FlatList
      data={data}
      ListFooterComponent={isRefreshing ? null : listFooter}
      maxToRenderPerBatch={1}
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        loadMoreData();
      }}
      refreshing={isFetching}
      onRefresh={() => {
        console.log('onRefresh');
        refreshData();
      }}
      renderItem={({item}) => (
        <ListItem
          title={item.title}
          image={item.urlToImage}
          onPress={() => nav.navigate('Detail', {url: item.url})}
        />
      )}
    />
  );
};
