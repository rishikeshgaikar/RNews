import React from 'react';
import {RootView, PagingListView} from '../../components';

export const Science = ({navigation}) => {
  return (
    <RootView>
      <PagingListView category={'science'} nav={navigation} />
    </RootView>
  );
};
