import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {



    return (
        <Pressable  style={styles.container}>

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
