import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ScrollableContentNormal = () => {
    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>ScrollableContent</Text>
                <Text style={{ fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>


                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Heading 01</Text>
                    <Text style={{ fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Heading 01</Text>
                    <Text style={{ fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ScrollableContentNormal