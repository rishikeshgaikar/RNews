import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const ListScreen = ({params}) => {
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var date = year + '/' + month + '/' + date;
    console.log(date);
  }, []);

  return (
    <View>
      <Text>ListScreen</Text>
    </View>
  );
};

export default ListScreen;
