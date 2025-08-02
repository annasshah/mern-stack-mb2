import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasicLayout = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View style={{ flex: 2, backgroundColor: 'blue', width: '100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Container 01</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'green', width: '100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Container 02</Text>
            </View>
            <View style={{ flex: 1, width: '100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Container 03</Text>
            </View>
        </View>
    )
}

export default BasicLayout
