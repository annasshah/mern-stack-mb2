import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>ImageComponent</Text>

      <Image
      width={300}
      height={250}
      source={{uri: 'https://reactnativepaper.com/static/hero-image-01a2d6137437c97f0457469168e52a03.png'}}
      resizeMode='center'
      />
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({})