import React, {Component} from 'react';
import {View,Text,FlatList,Switch,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const AlarmIcons=()=>(
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text>Mon </Text>
    <Text>Tues </Text>
    <Text>Wed </Text>
    <Text>Thur </Text>
    <Text>Fri </Text>
    <Text>Sat </Text>
    <Text>Sun </Text>
  </View>
)//星期选择组件

export default class Setalarm extends Component{
  constructor(props){
    super(props)
    this.state={
      alarm:[
        {
          id: 0,
          time:{hour:12,min:12},
          on:true,
          days:{one:true,two:true,three:true,four:true,five:true,six:true,seven:true,}
        },
      ],
      flag:true
    }
    this.rendertimer=this.rendertimer.bind(this)
    this.changestate=this.changestate.bind(this)
  }


  onPressadd=()=>{
    let newlist=this.state.alarm.map(function(item){return item})
    let newalarm={
      id:this.state.alarm.length,
      time:{hour:0,min:0},
      on:true,
      days:{one:true,two:true,three:true,four:true,five:true,six:true,seven:true}}
    newlist.push(newalarm)
    this.setState({alarm:newlist})
  }//添加闹钟组件

  onPressOnOff=()=>{
    let newlist=this.state.alarm.map(function(item){return item})
    let num=0
    for(let j=0;j<newlist.length;j++)
      if(newlist[j].on)
        num++
    if(num==0)
    {
      for(let i=0;i<newlist.length;i++)
      newlist[i].on=true
    }
    else
    {
      for(let i=0;i<newlist.length;i++)
      newlist[i].on=false
    }
    this.setState({alarm:newlist})
  }//全开全关组件

  changestate(idc){
    let newlist=this.state.alarm.map(function(item){return item})
    newlist[idc].on=!newlist[idc].on
    this.setState({alarm:newlist})
  }//闹钟开关

  rendertimer({item}){
    let idc=item.id
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,}}>
        
        <View>
          <Text style={{fontSize:40}}>{item.time.hour}{':'}{item.time.min}</Text>
          <AlarmIcons/>
        </View>

        <Switch value={item.on} onValueChange={()=>{this.changestate(item.id)}}/>
      </View>)
  }

  render(){
    return(
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'silver'}}>

          <View style={{justifyContent:'center',paddingLeft:12}}>
            <Icon name={'ios-bulb'} size={30} onPress={this.onPressOnOff}/>
          </View>

          <View>
            <Text style={{fontSize:35}}>
              Clock
            </Text>
          </View>

          <View style={{justifyContent:'center',paddingRight:12}}>
            <Icon name={'ios-add'} size={30} onPress={this.onPressadd}/>
          </View>

        </View>
        
        <FlatList
          data={this.state.alarm}
          renderItem={this.rendertimer}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}