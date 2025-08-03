import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../utils/stylesSheet'

const InputComponent = () => {
    const [inputText, setInputText] = useState('')
    // const changeHandle = (text) => {
    //     setInputText(text)

    // }
    return (
        <View style={[styles.container, styles.center, { flex: 1 }]}>
            <View style={styles.fullWidth}>
                <Text>This this input component</Text>
                <Text>{inputText}</Text>
                <TextInput style={styles.inputField} onChangeText={setInputText} placeholder='enter text here' />
            </View>
        </View>
    )
}

export default InputComponent