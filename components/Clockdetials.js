import React, {Component} from 'react';
import {View,Text,FlatList,Switch,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ClockSet extends Component{
  render(){
    return(
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'silver'}}>
          <View style={{justifyContent:'center',paddingLeft:12}}>
            <Icon name={'ios-arrow-round-back'} size={30} onPress={()=>this.props.navigation.goBack()}/>
          </View>

          <View>
            <Text style={{fontSize:35}}>
              Edit clock
            </Text>
          </View>

          <View style={{justifyContent:'center',paddingRight:12}}>
            <Icon name={'ios-checkmark'} size={30} onPress={this.onPressadd}/>
          </View>
        </View>
      </View>
        )
    }
}