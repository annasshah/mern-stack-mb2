import { Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Home = () => {

  const navigation = useNavigation()

  // const onPressHandle = () => {
  //   navigation.navigate('Dashboard')
  // }
  return (
    <View>
<Text>
  Home
</Text>
    </View>
  )
}

export default Home