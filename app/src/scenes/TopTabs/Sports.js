import React from 'react';
import {RootView, PagingListView} from '../../components';

export const Sports = ({navigation}) => {
  return (
    <RootView>
      <PagingListView category={'sports'} nav={navigation} />
    </RootView>
  );
};
