import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Setalarm from './Set'
import ClockSet from './Clockdetials'
import { createAppContainer, createStackNavigator } from 'react-navigation'

/*
export default class ClockScreen extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'silver'}}>
        <Setalarm/>
      </View>
    )
  }
}*/


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Setalarm,
    },
    Details: {
      screen: ClockSet,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
//Create navigators between different screens


//but there is some bug,we can't transmit data
//the most important is that the component can't setState so that we can't rerender the interface 



const AppContainerto = createAppContainer(RootStack);
export default class ClockScreen extends Component {
  render() {
    return <AppContainerto/>;
  }
}


ClockScreen.navigationOptions={  
  tabBarLabel:'Clock',
  tabBarColor:'silver',
  tabBarIcon:({tintColor,focused})=>(
    <Icon name='ios-alarm' color={tintColor} size={focused ? 28:24}/>
  )  
}
//set the tabbar's style
//and the icon will become bigger when the interface is focused