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
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    List: {screen: ListScreen},
    Settings: {screen: SettingScreen},
    TabScreen: {screen: TabContainer},
  },
  // {headerMode: 'none'},
);

const RootConatiner = createAppContainer(MainNavigator);
export default RootConatiner;
