import React from 'react';
import {RootView, PagingListView} from '../../components';

export const Business = ({navigation}) => {
  return (
    <RootView>
      <PagingListView category={'business'} nav={navigation} />
    </RootView>
  );
};
