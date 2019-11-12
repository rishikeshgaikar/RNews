import React from 'react';
import {Text, FlatList, ActivityIndicator, Button} from 'react-native';
import {RootView, Card} from '../../components';
import usePage from '../../hooks/usePage';

export const General = ({params}) => {
  const [
    data,
    isFetching,
    isRefreshing,
    noMoreData,
    loadMoreData,
    refreshData,
  ] = usePage('general');

  const listFooter = () => {
    if (!noMoreData) {
      return <ActivityIndicator style={{color: '#000'}} />;
    } else {
      return <Button title="refresh" onPress={() => refreshData()}></Button>;
    }
  };

  return (
    <RootView>
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
          <Card>
            <Text>{item.title}</Text>
          </Card>
        )}
      />
    </RootView>
  );
};
