import React, {Component} from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Trees from './Tree'

const PlantssScreen=()=>(
  <Trees/>
)
export default PlantssScreen

PlantssScreen.navigationOptions={  
  tabBarLabel:'Plant',
  tabBarColor:'#4bcffa',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='tree' color={tintColor} size={focused ? 28:24}/>
  )  
}

//set the tabbar's style
//same as clock.js