import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

const AppNavigator = createStackNavigator({
  Home: Home,
  Detail: Detail,
});

export default createAppContainer(AppNavigator);