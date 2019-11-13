import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {categories} from '../Constants';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export const TopCategories = ({nav}) => {
  return (
    <FlatList
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => nav.navigate(item.NavigateTo)}>
          <View style={[styles.card, {backgroundColor: item.color}]}>
            <Text style={{fontSize: 20, color: '#fff'}}>{item.title}</Text>
            {/* <Image source={item.image}></Image> */}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
