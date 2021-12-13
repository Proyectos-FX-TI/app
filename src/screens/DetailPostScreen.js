import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet,ScrollView,TouchableWithoutFeedback } from 'react-native'
import PostCard from '../components/PostCard';
import MapView from "react-native-maps";

export const DetailPostScreen = ({route, navigation}) => {
    const {post} = route.params;
    console.log(post);

    
    return (
        <ScrollView>
      <PostCard border={false} data={post} />
      <TouchableWithoutFeedback
        onPress={() => console.log("ok")}
        style={styles.container}
      >
        <Text style={styles.description}>
          Ubicaciòn
        </Text>
      </TouchableWithoutFeedback>
      <View style={{ marginHorizontal: 20 }}>
        <MapView
          scrollEnabled={false}
          style={{
            flex: 1,
            height: 200
          }}
          initialRegion={{
            latitude: post.coordinate.latitude,
            longitude: post.coordinate.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: post.coordinate.latitude,
              longitude: post.coordinate.longitude
            }}
            title={post.title}
            description={post.description}
          />
        </MapView>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 20
    },
    description: {
      fontSize: 16,
      marginLeft: 20,
    }
  });
  
