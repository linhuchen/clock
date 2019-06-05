import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Stopwatch from './Stopwatch'

const PlantsScreen =()=>(
  <Stopwatch/>
)
export default PlantsScreen

PlantsScreen.navigationOptions={  
  tabBarLabel:'Stopwatch',
  tabBarColor:'black',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='ios-stopwatch' color={tintColor} size={focused ? 28:24}/>
  )  
}