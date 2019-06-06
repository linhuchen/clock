import React, {Component} from 'react'
import {View,Text,ImageBackground,Dimensions} from 'react-native'
import imgbac from './Imgbac'
import Icon from 'react-native-vector-icons/Entypo'
import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const h=Dimensions.get('window').height-28
const w=Dimensions.get('window').width
const nowday=new Date().getDate()
const nowhour=new Date().getHours()

export default class Trees extends Component{
  constructor(props){
    super(props)
    this.state={
      dayday:{sumday:0,lasday:1}
    }
  }

  componentWillMount() {this.readdata()}
  componentDidUpdate(){this.savedata()}

  savedata(){
    let obje=this.state.dayday;
    AsyncStorage.setItem('dayday',JSON.stringify(obje));
  }
  readdata= async()=>{
    try{
      let dayinfo = await AsyncStorage.getItem('dayday')
      let parsed = JSON.parse(dayinfo)
      if(parsed == null)
        this.setState({dayday:{sumday:0,lasday:1}})
      else
        this.setState({dayday:parsed})
    }
    catch (error) {
      alert(error)
    }
  }

  onPress=()=>{
    //alert(this.state.dayday.lasday)
    if((this.state.dayday.lasday!=nowday)&&(nowhour>=6&&nowhour<=8))
      this.setState({
        dayday:{
          lasday:nowday,
          sumday:(this.state.dayday.sumday+1)%14
        }
      })
      this.savedata()
  }

  render(){
    return(
      <View>  
        <ImageBackground source={imgbac['png'+this.state.dayday.sumday]} style={{width:w, height: h,flexDirection:'row',justifyContent:'flex-end'}}>
          <Icon name={'leaf'} size={40} onPress={this.onPress} color={nowday!=this.state.dayday.lasday ? '#34495e':'#2ecc71'}/>
        </ImageBackground>
      </View>
    )
  }
}
