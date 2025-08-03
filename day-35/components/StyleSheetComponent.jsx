import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../utils/stylesSheet'

const StyleSheetComponent = () => {
  return (
    <View style={[styles.container, styles.center]}>
     <View>
         <Text style={styles.heading}>StyleSheetComponent</Text>
      
      <TouchableOpacity onPress={()=>Alert.alert('clicked')} style={[styles.button, styles.bgBlue]}>
        <Text style={styles.buttonText}>Click here</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default StyleSheetComponent

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal:15,
//         paddingVertical:25,
//         backgroundColor:'lightblue',
//         flex:1
//     },

//     center: {
//         justifyContent:'center',
//         alignItems:'center'
//     },

//     heading: {
//         fontSize:20,
//         fontWeight:'bold',
//         color:'green'
//     },


//     button:{
//         paddingHorizontal:10,
//         paddingVertical:15,
//         borderRadius: 2,
//         backgroundColor:'green'
//     },

//     buttonText: {
//         color:'white',
//         fontWeight:'bold',
//         textAlign:'center'
//     }
// })