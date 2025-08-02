import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../utils/stylesSheet'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/dist/Feather';
const Welcome = () => {

  const navigation = useNavigation()

  const onPressHandle = () => {
    navigation.navigate('Dashboard')
  }
  return (
    <View>
      <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={() => onPressHandle()}>
        <Text style={styles.buttonText}>
          Go to Dashboard
        </Text>


        {/* <Feather name='plus-square'
          size={25} /> */}
      </TouchableOpacity>
    </View>
  )
}

export default Welcome