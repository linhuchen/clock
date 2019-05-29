import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class PlantsScreen extends Component{
  render(){
    return(
      <View/>
    )
  }
}

PlantsScreen.navigationOptions={  
  tabBarLabel:'Plants',
  tabBarColor:'skyblue',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='ios-flower' color={tintColor} size={focused ? 28:24}/>
  )  
}