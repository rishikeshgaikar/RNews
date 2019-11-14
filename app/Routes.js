import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  HomeScreen,
  DetailScreen,
  ListScreen,
  SettingScreen,
} from './src/scenes';
import TabContainer from './TopTabs';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {screen: DetailScreen},
    TabScreen: {
      screen: TabContainer,
      navigationOptions: {
        headerTitle: 'Top Categories',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
);

const RootConatiner = createAppContainer(MainNavigator);
export default RootConatiner;
