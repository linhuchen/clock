import React, {Component} from 'react'
import {View,Text,ImageBackground,Dimensions} from 'react-native'
import imgbac from './Imgbac'

const h=Dimensions.get('window').height-16
const w=Dimensions.get('window').width

export default class Trees extends Component{
  constructor(props){
    super(props)
    this.state={
      day:2,
    }
  }

  render(){
    return(
      <View>
        <ImageBackground source={imgbac['png'+this.state.day]} style={{width:w, height: h}}/>
      </View>
    )
  }
}
