import React, {Component} from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import ClockScreen from './Clock'
import StopwatchScreen from './Stop'
import PlantssScreen from './Plant'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Warning:'])

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

export default createAppContainer(AppContainer)