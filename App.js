import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
    }
  },
});

export default createAppContainer(AppNavigator);