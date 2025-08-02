import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const tagsArr = ['Latest', 'New arrival', 'Near by', 'Featured', "Popular", 'Trending', 'Latest', 'New arrival', 'Near by', 'Featured', "Popular", 'Trending']

const TagComponent = ({ text }) => {

    return <View style={{paddingHorizontal:10, paddingVertical:10, borderRadius:5, backgroundColor:'lightgray', marginRight:20}}>
        <Text>{ text }</Text>
    </View>
}

const HorizontalScroll = () => {
    return (
        <View style={{paddingVertical:25, paddingHorizontal:15}}>
            <ScrollView  horizontal={true}  style={{flexDirection:'row'}}>
            {tagsArr.map((text)=><TagComponent text={text} />)}
        </ScrollView>
        </View>
    )
}

export default HorizontalScroll