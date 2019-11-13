import React from 'react';
import {RootView, PagingListView} from '../../components';

export const General = ({navigation}) => {
  return (
    <RootView>
      <PagingListView category={'general'} nav={navigation} />
    </RootView>
  );
};
