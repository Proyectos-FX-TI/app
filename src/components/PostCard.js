import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";


const PostCard = ({ data, border }) => {
  _renderItem = ({ item, index }) => {
    return <Image style={styles.img} source={{ uri: data.image }} />;
  };
  return (
    <View style={[styles.container, { borderBottomWidth: border ? 1 : 0 }]}>
      {/* <ImageBackground style={styles.img} source={{ uri: data.photos[0] }}>
        <View style={styles.priceView}>
          <Text style={styles.price}>{data.price} €</Text>
        </View>
      </ImageBackground> */}
      <Image style={styles.img} source={{ uri: data.image }} />

      <View style={styles.titleAndProfileImg}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.starsAndReviews}>
           
            <Text style={styles.reviews}>{data.description}</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderBottomColor: "#BBBBBB"
  },
  img: {
    height: 215
  },
  priceView: {
    height: 45,
    width: 70,
    backgroundColor: "black",
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  price: {
    color: "white",
    fontSize: 18
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  titleAndProfileImg: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  starsAndReviews: {
    flexDirection: "row",
    alignItems: "center"
  },
  reviews: {
    fontSize: 18,
    color: "#BBBBBB",
    marginLeft: 10
  }
});

export default PostCard;