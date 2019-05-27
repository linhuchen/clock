import * as React from 'react';
import { View } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

const ExampleScreen = View;

const Clock = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Clock',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Clock!',
    },
  }
);

const Plants = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Plants',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Plants!',
    },
  }
);

const Settings = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Settings',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Settings!',
    },
  }
);

const Tabs = createBottomTabNavigator({ Clock,Plants,Settings });
export default createAppContainer(Tabs);
