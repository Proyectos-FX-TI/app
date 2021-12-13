import React from 'react'
import { View, FlatList, TouchableOpacity, Dimensions } from 'react-native'

// import feed from '../../../assets/data/feed';
import Post from '../components/Post'

import {markers} from '../model/mapData'


const screenWidth = Dimensions.get('window').width;

export const ProductsScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
    
        <Post post={item} navigation={navigation} />
      );

    return (
        <View>

            <FlatList
                data={markers}
                renderItem={renderItem}
                keyExtractor={index => index.id} />
        </View>
    )
}

