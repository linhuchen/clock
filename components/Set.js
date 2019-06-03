import React, {Component} from 'react';
import {View,Text,FlatList,Switch,StyleSheet,Dimensions,StatusBar,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default class Setalarm extends Component{
  constructor(props){
    super(props)
    this.state={
      alarm:[
        {
          id: 0,
          time:{hour:12,min:12},
          on:true,
          days:[{day:'Mon',value:true},{day:'Tues',value:true},{day:'Wed',value:true},{day:'Thur',value:true},{day:'Fri',value:true},{day:'Sat',value:true},{day:'Sun',value:true}]
        }
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
      days:[{day:'Mon',value:true},{day:'Tues',value:true},{day:'Wed',value:true},{day:'Thur',value:true},{day:'Fri',value:true},{day:'Sat',value:true},{day:'Sun',value:true}]}
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

  mapdays(days){
    return(
      days.map(function(item){
        if(item.value==true)
        return(
          <Text>{item.day}  </Text>
        )
      })
    )
  }

  rendertimer({item}){
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,}}>
        
        <View>
          <Text style={{fontSize:40}}>{item.time.hour}{':'}{item.time.min}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',}}>{this.mapdays(item.days)}</View>
        </View>

        <Switch value={item.on} onValueChange={()=>{this.changestate(item.id)}}/>
      </View>)
  }//返回列表元素

  render(){
    return(
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'silver',height:50}}>
          <View style={{justifyContent:'center',paddingLeft:12}}>
            <Icon name={'ios-bulb'} size={35} onPress={this.onPressOnOff}/>
          </View>
          <View>
            <Text style={{fontSize:35,justifyContent:'center'}}>
              Clock
            </Text>
          </View>
          <View style={{justifyContent:'center',paddingRight:12}}>
            <Icon name={'ios-add'} size={35} onPress={this.onPressadd}/>
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
}//返回整个页面