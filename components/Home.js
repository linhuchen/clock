import React, {Component} from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import ClockScreen from './Clock'
import PlantsScreen from './Plants'
import SettingsScreen from './Settings'
import { createAppContainer, createStackNavigator } from 'react-navigation'


const AppContainer = createMaterialBottomTabNavigator(
  {
  Clock:{screen: ClockScreen},
  Plants:{screen: PlantsScreen},
  Settings:{screen:SettingsScreen}
  },
  {
    initialRouteName:'Clock',
    shifting: true,
  }
)

export default createAppContainer(AppContainer)