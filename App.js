import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ViewScreen from './src/ViewScreen';

const navigator = createStackNavigator(
  {
    Home : SearchScreen,
    ShowResult : ViewScreen
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions : {
      title : 'Food Search',
      headerTitleAlign : 'left'
    }
  }
);

export default createAppContainer(navigator);

