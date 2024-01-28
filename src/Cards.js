import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { DeviceHeight } from './Dimensions'
import { DeviceWidth } from './Dimensions'


export default function Cards({name,image,navigation}) {
  return (
    <TouchableOpacity style ={{marginHorizontal:10 }} onPress={()=>navigation.navigate('Details',{name})} >
      <ImageBackground
        source={image}
        style={{height: DeviceHeight / 5, width: DeviceWidth / 2 - 50}} imageStyle={{borderRadius:16}}/>
        <View style={{position:"absolute",height:"100%",width:"100%"}}>
          <Text style= {{fontSize:22,height:"100%",width:"100%", textAlign:"center", textAlignVertical:"center",color:"white"}} >{name}</Text>
        </View>
    </TouchableOpacity>
    
  )
}