import React from 'react';
// import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import { MapStyle } from '../styles/MapStyle';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { ProfileHeader } from "@freakycoder/react-native-header-view";
// import {showalert} from '../utils/ShowAlert';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 5.0
});

const permissionHandle = () => {
  return RNLocation.checkPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse' // or 'fine'
    }
  });
}

let location;
var permission = null;

if(!permission) {
    permission = RNLocation.requestPermission({
       ios: "whenInUse",
       android: {
         detail: "coarse",
         rationale: {
           title: "We need to access your location",
           message: "We use your location to show where you are on the map",
           buttonPositive: "OK",
           buttonNegative: "Cancel"
         }
       }
     })
     console.log(permission)
     location = RNLocation.getLatestLocation({timeout: 100})
     console.log(location, location.longitude, location.latitude, 
           location.timestamp)
} else {
    console.log("Here 7")
    location = RNLocation.getLatestLocation({timeout: 100})
    console.log(location, location.longitude, location.latitude,   
                location.timestamp)
}

export default function MapScreen({ navigation, route }) {
  
  // const [showList, setShowList] = useState(true);
  //showalert(user.email);
  //const location = RNLocation.getLatestLocation({timeout: 100})
  //console.log(location, location.longitude, location.latitude, location.timestamp)
  return (
    <View style={styles.container}>
      {/* <ProfileHeader
      titleText="Mapa"
      /> */}
      <MapView
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 41.3995345,
          longitude: 2.1909796,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard"
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  scrollView: {
    marginBottom: 50,
    width: '100%',
  },
  mapStyle: {
    width: windowWidth,
    height: windowHeight,
  },
});
