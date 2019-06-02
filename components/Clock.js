import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Setalarm from './Set'

export default class ClockScreen extends Component{
  render(){
    return(
      <View>
        <Setalarm/>
      </View>
    )
  }
}




ClockScreen.navigationOptions={  
  tabBarLabel:'Clock',
  tabBarColor:'black',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='ios-alarm' color={tintColor} size={focused ? 28:24}/>
  )  
}