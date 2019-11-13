import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {Card} from '../components';

export const ListItem = ({onPress, title, image}) => {
  let img =
    'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <Image
            style={{width: 100, height: 100, flex: 1, borderRadius: 10}}
            source={{uri: image === null ? img : image}}></Image>
          <Text
            style={{flex: 2, flexWrap: 'wrap', fontSize: 16, marginLeft: 10}}>
            {title}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
