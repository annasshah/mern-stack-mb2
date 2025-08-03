import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from '../utils/stylesSheet'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorageComponent = () => {

    const setDataHandle = async () => {
        const userObj = {
            username: 'user001',
            theme: 'dark',
            fullName: 'Asad Ahmed'
        }
        const userObjStringify = JSON.stringify(userObj)

        try {
            await AsyncStorage.setItem('@user-data', userObjStringify)
            await AsyncStorage.setItem('@theme', userObj.theme)
            Alert.alert('Data stored successfully')

        } catch (error) {
            Alert.alert('Fail to store data')
        }

    }


    const getDataHandle = async () => {
        try {
            const userData = await AsyncStorage.getItem('@user-data')
            if (userData !== null) {
                const userDataParsed = JSON.parse(userData)
                console.log(userDataParsed)
            }

            console.log('userData', userData)
        } catch (error) {
            Alert.alert('Fail to get data')
        }
    }


    const clearUserDataHandle = async () => {
        try {
            await AsyncStorage.removeItem('@user-data')
            Alert.alert('User data removed successfully')
        } catch (error) {
            Alert.alert('Fail to remove user data')
        }
    }

    const clearAllHandle = async () => {
        try {
            await AsyncStorage.clear()
            Alert.alert('Cleared storage successfully')
        } catch (error) {
            Alert.alert('Fail to clear storage')
        }
    }


    const getKeys = async () => {

        try {
            const storageKeys =  await  AsyncStorage.getAllKeys()
            console.log('All keys', storageKeys)
         } catch (error) {
            Alert.alert('Fail to get keys')
        }
    }



    return (
        <View>
            
            <View style={{paddingHorizontal: 20, marginVertical: 10}}>
                <Text style={styles.heading}>AsyncStorage</Text>
            </View>


            <View style={{paddingHorizontal:20, gap:15}}>
                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={setDataHandle}>
                    <Text style={styles.buttonText}>
                        Set Data
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={getDataHandle}>
                    <Text style={styles.buttonText}>
                        Get Data
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={clearUserDataHandle}>
                    <Text style={styles.buttonText}>
                       Remove user data
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={clearAllHandle}>
                    <Text style={styles.buttonText}>
                       Clear all
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={getKeys}>
                    <Text style={styles.buttonText}>
                       Get all keys
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default AsyncStorageComponent