import React from 'react'
import { View, FlatList } from 'react-native'

// import feed from '../../../assets/data/feed';
import Post from '../components/Post'
import { markers } from '../model/mapData';


export const ProductsScreen = () => {

    return (
        <View>
            <FlatList
                data={markers}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(index) => {
                    return index.toString();
                }} />
        </View>
    )
}

