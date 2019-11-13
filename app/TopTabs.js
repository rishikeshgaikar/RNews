import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {
  Business,
  General,
  Science,
  Sports,
  Technology,
} from './src/scenes/TopTabs';

const TabScreen = createMaterialTopTabNavigator(
  {
    Business: {screen: Business},
    General: {screen: General},
    Science: {screen: Science},
    Sports: {screen: Sports},
    Technology: {screen: Technology},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#e91e63',
      inactiveTintColor: '#87B56A',
      style: {
        backgroundColor: '#F5FFFA',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#e91e63',
        borderBottomWidth: 2,
      },
    },
  },
);

export default TabScreen;
