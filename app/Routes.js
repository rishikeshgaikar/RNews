import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  HomeScreen,
  DetailScreen,
  ListScreen,
  SettingScreen,
} from './src/scenes';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    List: {screen: ListScreen},
    Settings: {screen: SettingScreen},
  },
  {headerMode: 'none'},
);

const RootConatiner = createAppContainer(MainNavigator);
export default RootConatiner;
