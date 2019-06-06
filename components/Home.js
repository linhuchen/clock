import React, {Component} from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import ClockScreen from './Clock'
import StopwatchScreen from './Stop'
import PlantssScreen from './Plant'
//import three screen pages' components
import { createAppContainer, createStackNavigator } from 'react-navigation'//Import components that create navigation pages
import {YellowBox} from 'react-native'//import the component to ignore the yellow warning
YellowBox.ignoreWarnings(['Warning:'])
//The yellow error message is very unfriendly 
//to the user experience. Our error message is because 
//the map using the array is not used to give him the key, 
//which will not affect the use, so we ignore it.

const AppContainer = createMaterialBottomTabNavigator(
  {
  Clock:{screen: ClockScreen},
  Stopwatch:{screen: StopwatchScreen},
  Plants:{screen:PlantssScreen}
  },
  {
    initialRouteName:'Clock',
    shifting: true,
  }
)

//Create navigators between different screens,and set the initial screen is clock screen

export default createAppContainer(AppContainer)