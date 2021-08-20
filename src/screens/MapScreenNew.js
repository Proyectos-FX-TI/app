import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import MapView, { Polyline, Marker }  from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useLocation} from '../hooks/useLocation';
import {markers} from '../data/markers';


export const MapScreenNew = ( ) => {


  const {location} = useLocation();

  return (
    
    <View style={{flex:1}} >
      <MapView
        style={{flex:1}}
        showsUserLocation
        initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>      
        {markers.map((marker, index) => (   
          <Marker
          key={index}
          coordinate={{ latitude : marker.latitude , longitude : marker.longitude }}
          title={marker.title}
          description={marker.description}
          >
            <View
              style={{width:50, height:50, backgroundColor:'#21B2FD', alignItems:'center', justifyContent:'center', borderRadius:50}}
            >
              <Text style={{color:'white'}} >${marker.precio}</Text>
            </View>
          </Marker>
        ))} 
      </MapView>  
    </View>
    
  )
}

