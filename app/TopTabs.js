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
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);

export default TabScreen;
