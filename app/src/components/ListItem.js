import React from 'react';
import {Text, TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import {Card} from '../components';

const styles = StyleSheet.create({
  image: {width: 100, height: 100, flex: 1, borderRadius: 10},
  text: {flex: 2, flexWrap: 'wrap', fontSize: 16, marginLeft: 10},
  view: {flex: 2, flexDirection: 'row'},
});

export const ListItem = ({onPress, title, image}) => {
  let img =
    'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={{uri: image === null ? img : image}}></Image>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
