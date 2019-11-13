import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Card,
  RootView,
  ListItem,
  TopHeadlineListItem,
  Heading,
  TopCategories,
} from '../components';
import {days, months, categories} from '../Constants';
import TopHeadlines from '../api/TopHeadlines';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState();
  const [HeadlineData, setHeadlineData] = useState();
  const [LatestNewsData, setLatestNewsData] = useState();
  useEffect(() => {
    getCurrentDate();
    getHomeData();
    console.log(date);
  }, []);

  const getHomeData = () => {
    console.log('test');
    return TopHeadlines()
      .then(result => {
        if (result.status == 200) {
          console.log(result.data.articles);
          const articles = result.data.articles;
          let HeadlineArticles = [];
          for (let i = 0; i < 10; i++) {
            if (articles[i].urlToImage != null) {
              HeadlineArticles.push(articles[i]);
            }
          }
          setHeadlineData(HeadlineArticles.slice(0, 5));
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
    var finalDate = '' + days[day] + ', ' + months[month] + ' ' + date;
    setDate(finalDate);
  };

  return (
    <RootView>
      <ScrollView>
        <Heading text={date} />
        <Carousel
          data={HeadlineData}
          renderItem={({item}) => (
            <TopHeadlineListItem
              title={item.title}
              image={item.urlToImage}
              onPress={() => navigation.navigate('Detail', {url: item.url})}
            />
          )}
          sliderWidth={400}
          itemWidth={200}
          loop={true}
        />

        <Heading text={'Top Categories'} />
        <TopCategories nav={navigation} />

        <Heading text={'Latest News'} />
        <FlatList
          data={LatestNewsData}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              image={item.urlToImage}
              onPress={() => navigation.navigate('Detail', {url: item.url})}
            />
          )}
        />
      </ScrollView>
    </RootView>
  );
};

export default HomeScreen;
