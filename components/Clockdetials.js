import React, {Component} from 'react';
import {View,Text,FlatList,Switch,StyleSheet,Dimensions,TimePickerAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'



export default class ClockSet extends Component{
  static navigationOptions={
    headerTitle:'ClockSet',
    headerStyle:{backgroundColor:'silver'},
    headerTitleStyle:{textAlign:'center',flex:1,fontSize:30}
  }
  constructor(props){
    super(props)
  }

  render(){
    var item = this.props.navigation.getParam('alarm','Error')
    let hours=item.hour
    let min=item.min
    return(
      <View style={{flex:1,backgroundColor:'silver',alignItems:'center'}}>
        <Text 
          onPress={()=>{TimePickerAndroid.open({hour:hours,minute:min,is24Hour:false})}}
          style={{fontSize:40,}}
        >
          {item.hour<10 ? '0'+item.hour : item.hour}
          {':'}
          {item.min<10 ? '0'+item.min : item.min}
        </Text>
      </View>
        )
    }
}

const styles=StyleSheet.create({
  test:{
    fontSize:35,
    justifyContent:'center'
  }
})