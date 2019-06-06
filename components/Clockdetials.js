import React, {Component} from 'react';
import {View,Text,StyleSheet,TimePickerAndroid,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ClockSet extends Component{
  static navigationOptions={
    headerTitle:'ClockSet',
    headerStyle:{backgroundColor:'silver'},
    headerTitleStyle:{textAlign:'center',flex:1,fontSize:30},
  }
  constructor(props){
    super(props)
    this.state={
      ll:""
    }
  }
  


  render(){
    var item = this.props.navigation.getParam('alarm','Error')
    let hours=item.hour
    let min=item.min
    return(
      <View style={styles.container}>
        <Text 
          onPress={()=>{TimePickerAndroid.open({hour:hours,minute:min,is24Hour:false}).then(
            result =>{
              if(result.action === TimePickerAndroid.timeSetAction)
              {
                alert(result.hour)

              }
            }
          )}}
          style={styles.text}
        >
          Time:  {item.hour<10 ? '0'+item.hour : item.hour}
          {':'}
          {item.min<10 ? '0'+item.min : item.min}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:30}}>Repeat:</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name={'numeric-1'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
            <Icon name={'numeric-2'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
            <Icon name={'numeric-3'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
            <Icon name={'numeric-4'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
            <Icon name={'numeric-5'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
            <Icon name={'numeric-6'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
            <Icon name={'numeric-7'} size={40} color={item.Mon ? '#ffdd59': '#1e272e'}/>
          </View>
        </View>
      </View>
        )
    }
}

const styles=StyleSheet.create({
  text:{
    fontSize:40,
  },
  container:{
    flex:1,
    backgroundColor:'silver',
  },
  

})


//Abandoned component!!!