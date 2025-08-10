import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from '../utils/stylesSheet'

const InputComponent = ({ label, placeholder, changeHandle, ...props }) => {

    return (
        <View style={[styles.fullWidth, {gap:5}]}>
            <Text style={{fontWeight:'500', fontSize:17}}>{label}</Text>
            <TextInput {...props} style={styles.inputField} onChangeText={changeHandle} placeholder={placeholder}  />
        </View>
    )
}

export default InputComponent