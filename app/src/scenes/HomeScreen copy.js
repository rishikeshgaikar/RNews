import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {Card, RootView} from '../components';
import {days, months, categories} from '../Constants';
import TopHeadlines from '../api/TopHeadlines';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    getCurrentDate();
    getTopHeadlines();
  }, []);

  const getTopHeadlines = () => {
    console.log('test');
    return TopHeadlines()
      .then(result => {
        if (result.status == 200) {
          console.log(result.data.articles);
          setData(result.data.articles);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var day = new Date().getDay();
    var month = new Date().getMonth();
    var finalDate = '' + days[day] + '' + months[month] + '' + date;
    setDate(finalDate);
  };

  return (
    <RootView>
      <ScrollView
        contentContainerStyle={{
          flexgrow: 1,
          justifyContent: 'space-between',
        }}>
        <Text>{date}</Text>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Card>
              <Image source={{uri: item.urlToImage}}></Image>
              <Text>{item.title}</Text>
            </Card>
          )}
        />
        <Text>Top Categories</Text>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
              <Card>
                <Text>{item.title}</Text>
                <Image source={item.image}></Image>
              </Card>
            </TouchableOpacity>
          )}
        />

        <Text>Latest News</Text>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <Card>
              <Text>{item.title}</Text>
            </Card>
          )}
        />
      </ScrollView>
    </RootView>
  );
};

export default HomeScreen;
