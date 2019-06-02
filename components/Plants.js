import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const PlantsScreen =()=>(
  <View/>
)
export default PlantsScreen

PlantsScreen.navigationOptions={  
  tabBarLabel:'Plants',
  tabBarColor:'skyblue',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='ios-rose' color={tintColor} size={focused ? 28:24}/>
  )  
}