import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../utils/stylesSheet'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const ImagePickerComponent = () => {
    const [images, setImages] = useState([])


    const launchCameraHandle = async () => {

        const result = await launchCamera({ includeBase64: false, mediaType: 'photo', saveToPhotos:true })

        if (!result.didCancel) {
            const imageUri = result.assets[0].uri
            setImages((pre) => {
                return [...pre, imageUri]
            })
        }

        console.log(result)

    }


    const launchGalleryHandle = async () => {

        const result = await launchImageLibrary({ includeBase64: false, mediaType: 'photo', selectionLimit:5 })

        if (!result.didCancel) {
            const imageUri = result.assets.map(({uri})=>uri)
            setImages((pre) => {
                return [...pre, ...imageUri]
            })
        }

        console.log(result)

    }

    console.log('images', images)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Image Picker Component</Text>




            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, marginTop: 20 }}>

                {
                    images.map((img) => <Image
                        resizeMode='cover' style={{ width: 150, height: 150 }} source={{ uri: img }}
                    />)
                }

            </View>
            </ScrollView>


            <View style={{ gap: 15, paddingVertical: 15 }}>
                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={launchCameraHandle}>
                    <Text style={styles.buttonText}>
                        Launch Camera
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.bgGreen]} onPress={launchGalleryHandle}>
                    <Text style={styles.buttonText}>
                        Launch Gallery
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImagePickerComponent