import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("../public/images/bg.png")} style={{height:'100%'}} />
      <View style={{position:'absolute'}}>
        {children}
      </View>
    </View>
  )
}

export default Background