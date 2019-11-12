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
  const [HedlineData, setHeadlineData] = useState();
  const [LatestNewsData, setLatestNewsData] = useState();
  useEffect(() => {
    getCurrentDate();
    getHomeData();
  }, []);

  const getHomeData = () => {
    console.log('test');
    return TopHeadlines()
      .then(result => {
        if (result.status == 200) {
          console.log(result.data.articles);
          const articles = result.data.articles;
          setHeadlineData(articles.slice(0, 4));
          setLatestNewsData(articles.slice(5));
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
      <ScrollView>
        <Text>{date}</Text>
        <FlatList
          data={HedlineData}
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
            <TouchableOpacity
              onPress={() => navigation.navigate(item.NavigateTo)}>
              <Card>
                <Text>{item.title}</Text>
                <Image source={item.image}></Image>
              </Card>
            </TouchableOpacity>
          )}
        />

        <Text>Latest News</Text>
        <FlatList
          data={LatestNewsData}
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
