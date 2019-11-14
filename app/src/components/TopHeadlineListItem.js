import React from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import R from '../R';

const styles = StyleSheet.create({
  imageBackground: {
    width: R.dimensions.width / 1.5,
    height: R.dimensions.height / 3.5,
    margin: 10,
    flex: 1,
  },
  outerView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  innerView: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10,
    margin: 5,
  },
  text: {fontSize: 10, margin: 5, fontWeight: 'bold'},
});

export const TopHeadlineListItem = ({onPress, title, image}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={styles.imageBackground}
        source={{uri: image}}>
        <View style={styles.outerView}>
          <View style={styles.innerView}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
