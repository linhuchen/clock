import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Stopwatch from './Stopwatch'

const StopwatchScreen =()=>(
  <Stopwatch/>
)
export default StopwatchScreen

StopwatchScreen.navigationOptions={  
  tabBarLabel:'Stopwatch',
  tabBarColor:'black',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='ios-stopwatch' color={tintColor} size={focused ? 28:24}/>
  )  
}