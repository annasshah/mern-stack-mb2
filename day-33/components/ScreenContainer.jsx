import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../utils/stylesSheet'
import { useNavigation } from '@react-navigation/native';

const screenNames = ["Home", "Contact", "Profile", "Settings"]

const ScreenContainer = ({ title }) => {
    const navigation = useNavigation();

    const onPressHandle = (screenName) => {
        navigation.navigate(screenName, {state: {
            screen: screenName,
            data: []
        }})
    }

    return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.heading}>{title} Screen</Text>

            <View style={{gap:20, marginTop:20}}>
                {screenNames.map((screenName) => <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={()=>onPressHandle(screenName)}>
                    <Text style={styles.buttonText}>
                        Go to {screenName}
                    </Text>
                </TouchableOpacity>)}
            </View>
        </View>
    )
}

export default ScreenContainer