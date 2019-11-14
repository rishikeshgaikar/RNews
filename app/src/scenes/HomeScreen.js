import React, {useEffect, useState} from 'react';
import {ScrollView, View, FlatList, ActivityIndicator} from 'react-native';
import {
  RootView,
  ListItem,
  TopHeadlineListItem,
  Heading,
  TopCategories,
  ImageCarousel,
} from '../components';
import {days, months} from '../Constants';
import TopHeadlines from '../api/TopHeadlines';
import R from '../R';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState();
  const [HeadlineData, setHeadlineData] = useState();
  const [LatestNewsData, setLatestNewsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
          setIsLoading(false);
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

  const Listheader = () => {
    return (
      <React.Fragment>
        <Heading text={date} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={HeadlineData}
          renderItem={({item}) => (
            <TopHeadlineListItem
              title={item.title}
              image={item.urlToImage}
              onPress={() => navigation.navigate('Detail', {url: item.url})}
            />
          )}
          keyExtractor={(item, index) => item.title}
        />
        <Heading text={'Top Categories'} />
        <TopCategories nav={navigation} />
        <Heading text={'Latest News'} />
      </React.Fragment>
    );
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <RootView>
        <FlatList
          ListHeaderComponent={Listheader}
          data={LatestNewsData}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              image={item.urlToImage}
              onPress={() => navigation.navigate('Detail', {url: item.url})}
            />
          )}
          keyExtractor={(item, index) => item.title}
        />
      </RootView>
    );
  }
};

export default HomeScreen;
