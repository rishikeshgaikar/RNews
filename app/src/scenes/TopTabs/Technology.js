import React from 'react';
import {RootView, PagingListView} from '../../components';

export const Technology = ({navigation}) => {
  return (
    <RootView>
      <PagingListView category={'technology'} nav={navigation} />
    </RootView>
  );
};
