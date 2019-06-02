import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const SettingsScreen=()=>(
  <View/>
)
export default SettingsScreen

SettingsScreen.navigationOptions={  
  tabBarLabel:'Settings',
  tabBarColor:'pink',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='md-settings' color={tintColor} size={focused ? 28:24}/>
  )  
}