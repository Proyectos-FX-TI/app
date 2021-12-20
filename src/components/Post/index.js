import React from 'react'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles'

const Post = ({ post, navigation, edit=null }) => {

    const { top } = useSafeAreaInsets();
    const route = (edit) ? 'EditPost' : 'DetailPost' ;

    return (
        <Pressable  
            onPress={() => {
            navigation.navigate(route,{
            post: post
            });
          }}  style={{...styles.container, marginTop:top+65}}>

        {/* image */}
        <Image
            style={styles.image}
            source={{ uri: post.image }}
        />



        {/* Tpes and description */}
        <Text style={styles.description} numberOfLines={2}>
            {post.title}
        </Text>

        {/* Old price and new price */}
        <Text style={styles.prices} >
        <Text style={styles.newPrice}> ${post.price}</Text></Text>

        {/* Total price */}

        <Text style={styles.totalPrice}>
            ${post.price} Total
        </Text>


        </Pressable>
       
        
    )
}

export default Post
