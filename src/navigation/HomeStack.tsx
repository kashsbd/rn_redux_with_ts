import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/CounterScreen';
import {HomeStackNavigatorParamList} from './types';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Counter" component={CounterScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
