import React, {Component} from 'react';
import {View,Text,FlatList,Switch,StyleSheet,StatusBar,TimePickerAndroid,Image,Vibration} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icont from 'react-native-vector-icons/MaterialCommunityIcons'
import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'
import Swipeout from 'react-native-swipeout'
import ref from './Imgcom'
import BackgroundTimer from 'react-native-background-timer';

const url='https://api.seniverse.com/v3/weather/now.json?key=SZW94eRSbE270Oca2&location=beijing&language=en&unit=c'
/*
function Mapdays({days,onPressicon}){
  return(
    days.map(function(item){
      if(item.value==true)
      return (
        <Icont 
          name={'numeric-'+item.day} 
          color={item.value ? '#ffdd59': '#1e272e'} 
          size={30}
          onPress={onPressicon}
        />
      )
    })
  )
}

function Topbar({onPressOnOff,onPressadd}){
  return(
    <View>
      <View style={styles.topbar}>
        <View style={styles.topiconleft}>
          <Icon name={'ios-bulb'} size={35} onPress={onPressOnOff}/>
        </View>
        <View>
          <Text style={styles.title}>
            Clock
          </Text>
        </View>
        <View style={styles.topiconright}>
          <Icon name={'ios-add'} size={35} onPress={onPressadd}/>
        </View>
      </View>
    </View>
  )
}

function Swi({on,onValueChange}){
  return(
    <Switch value={on} onValueChange={onValueChange}/>
  )
}
*/
export default class Setalarm extends Component{
  static navigationOptions={
    headerTitle:'Clock',
    headerStyle:{backgroundColor:'silver'},
    headerTitleStyle:{textAlign:'center',flex:1,fontSize:30},
  }

  constructor(props){
    super(props)
    this.state={
      alarm:[],
      data:[],
      code:"",
      tem:""
    }
    this.rendertimer=this.rendertimer.bind(this)
    this.Turn_one=this.Turn_one.bind(this)
    this.deletealarm=this.deletealarm.bind(this)
    this.Addalarm=this.Addalarm.bind(this)
    this.Turn_all=this.Turn_all.bind(this)
    this.Turn_day=this.Turn_day.bind(this)
    this.Settime=this.Settime.bind(this)
  }

  componentWillMount() {this.readdata()}
  componentDidUpdate(){this.savedata()}
  componentDidMount(){
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          data:data.results[0]
        })
        this.setState({
          code:this.state.data.now.code,
          tem:this.state.data.now.temperature
        })
        //alert(this.state.data)
      })
      .catch(error=>alert(error))
  }

  savedata(){
    let obj=this.state.alarm;
    AsyncStorage.setItem('alarm',JSON.stringify(obj));
  }

  readdata= async()=>{
    try{
      let user = await AsyncStorage.getItem('alarm')
      let parsed = JSON.parse(user)
      this.setState({alarm:parsed})
    }
    catch (error) {
      alert(error)
    }
  }

  clear() {
    AsyncStorage.clear(function(err){
      if(!err){
        this.setState({alarm:[]})
        alert('存储的数据已清除完毕!')
      }
    })
  }

  Addalarm=()=>{
    let newlist=[]
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    if(this.state.alarm!=null)
      {newlist=this.state.alarm.map(function(item){return item})}
    let newalarm={
      id:newlist.length,
      hour:h,
      min:m,
      on_of:true,
      Mon:true,
      Tues:true,
      Wed:true,
      Thur:true,
      Fri:true,
      Sat:true,
      Sun:true,
    }
    newlist.push(newalarm)
    this.setState({alarm:newlist})
    TimePickerAndroid.open({hour:newalarm.hour,minute:newalarm.min,is24Hour:true}).then(
      result =>{
        if(result.action === TimePickerAndroid.timeSetAction)
        {
          this.Settime(newalarm.id,result.hour,result.minute)
        }
      }
    )
    this.savedata()
  }
  
  Turn_all=()=>{
    let len=this.state.alarm.length
    if(len>0)
    {
      let newlist=this.state.alarm.map(function(item){return item})
      let num=0
      for(let j=0;j<newlist.length;j++)
        if(newlist[j].on_of)
          num++
      if(num==0)
      {
        for(let i=0;i<newlist.length;i++)
        newlist[i].on_of=true
      }
      else
      {
        for(let i=0;i<newlist.length;i++)
        newlist[i].on_of=false
      }
      this.setState({alarm:newlist})
      this.savedata()
    }
  }
  
  
  Turn_one(index){
    let newlist=this.state.alarm.map(function(item){return item})
    newlist[index].on_of=!newlist[index].on_of
    this.setState({alarm:newlist})
    this.savedata()
    // alert(ref[a])
  }

  Turn_day(id,dayy){
    //alert(id)
    //alert(dayy)
    let newlist=this.state.alarm.map(function(item){return item})
    newlist[id][dayy]=!newlist[id][dayy]
    this.setState({alarm:newlist})
    this.savedata()
  }

  Settime(id,h,m){
    //alert(h)
    let newlist=this.state.alarm.map(function(item){return item})
    newlist[id].hour=h
    newlist[id].min=m
    this.setState({alarm:newlist})
    this.savedata()
  }

  deletealarm(index){
    let newlist=this.state.alarm.map(function(item){return item})
    newlist.splice(index,1)
    for(let i=index;i<newlist.length;i++)
      {
        newlist[i].id=newlist[i].id-1
      }
    this.setState({alarm:newlist})
    this.savedata()
  }

  rendertimer({item}){
    const swipeouticon=[
      {
        text:'Delete',
        onPress:()=>{
          this.deletealarm(item.id)}}
    ]
    return(
      <Swipeout right={swipeouticon} autoClose={true}>
        <View style={styles.item}>
          <View>
            <View>
              <Text 
                style={{fontSize:40}}
                onPress={()=>{TimePickerAndroid.open({hour:item.hour,minute:item.min,is24Hour:true}).then(
                  result =>{
                    if(result.action === TimePickerAndroid.timeSetAction)
                    {
                      this.Settime(item.id,result.hour,result.minute)
                    }
                  }
                )}}
              >
                {item.hour<10 ? '0'+item.hour : item.hour}
                {':'}
                {item.min<10 ? '0'+item.min : item.min}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icont name={'numeric-1'} size={30} onPress={()=>{this.Turn_day(item.id,'Mon')}} color={item.Mon ? '#1e272e': '#b2bec3'}/>
              <Icont name={'numeric-2'} size={30} onPress={()=>{this.Turn_day(item.id,'Tues')}} color={item.Tues ? '#1e272e': '#b2bec3'}/>
              <Icont name={'numeric-3'} size={30} onPress={()=>{this.Turn_day(item.id,'Wed')}} color={item.Wed ? '#1e272e': '#b2bec3'}/>
              <Icont name={'numeric-4'} size={30} onPress={()=>{this.Turn_day(item.id,'Thur')}} color={item.Thur ? '#1e272e': '#b2bec3'}/>
              <Icont name={'numeric-5'} size={30} onPress={()=>{this.Turn_day(item.id,'Fri')}} color={item.Fri ? '#1e272e': '#b2bec3'}/>
              <Icont name={'numeric-6'} size={30} onPress={()=>{this.Turn_day(item.id,'Sat')}} color={item.Sat ? '#1e272e': '#b2bec3'}/>
              <Icont name={'numeric-7'} size={30} onPress={()=>{this.Turn_day(item.id,'Sun')}} color={item.Sun ? '#1e272e': '#b2bec3'}/>
            </View>
          </View>
          <Switch value={item.on_of} onValueChange={()=>{this.Turn_one(item.id)}} thumbColor={'white'}/>
        </View>
      </Swipeout>
    )
  }

  render(){

    BackgroundTimer.runBackgroundTimer(() => {
      let alr=this.state.alarm
      let h=new Date().getHours()
      let m=new Date().getMinutes()
      let d=new Date().getDay()
      let da=""
      if(d==0)
        da='Sun'
      if(d==1)
        da='Mon'
      if(d==2)
        da='Tues'
      if(d==3)
        da='Wed'
      if(d==4)
        da='Thur'
      if(d==5)
        da='Fri'
      if(d==6)
        da='Sat'
      //alert(alr[0])
      //alert(alr[0].hour)
      for(let i=0;i<alr.length;i++)
      {
        if(alr[i].hour==h&&alr[i].min==m&&alr[i].on_of&&alr[i][da])
          Vibration.vibrate([0,3000,0,3000,0,3000],false) 
      }
     
    }, 
    10000);
    
    BackgroundTimer.stopBackgroundTimer();

    return(
      <View style={{flex:1,backgroundColor:'silver'}}>
        <StatusBar backgroundColor={'#d2dae2'} />
        <FlatList
          data={this.state.alarm}
          renderItem={this.rendertimer}
          keyExtractor={item => item.id}
        />
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={ref['png'+this.state.code]}/>
          <Icon name={'ios-body'} size={40} onPress={this.Addalarm}/>
        </View>
      </View>
    )
  }

}

const styles=StyleSheet.create({
  topbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'silver',
    height:50
  },
  topiconleft:{
    justifyContent:'center',
    paddingLeft:12
  },
  topiconright:{
    justifyContent:'center',
    paddingRight:12
  },
  title:{
    fontSize:35,
    justifyContent:'center'
  },
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
  }

})

/*
{
  "results":[
    {
      "location":
        {"id":"WX4FBXXFKE4F",
        "name":"Beijing",
        "country":"CN",
        "path":"Beijing,Beijing,China",
        "timezone":"Asia/Shanghai",
        "timezone_offset":"+08:00"},
      "now":
        {"text":"Cloudy",
        "code":"4",
        "temperature":"22"},
      "last_update":"2019-06-04T23:25:08+08:00"}]}
      onPress={()=>{this.props.navigation.navigate('Details',{alarm:item})}}
      */