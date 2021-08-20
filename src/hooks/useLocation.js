import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    });


    useEffect(() => {
        Geolocation.getCurrentPosition(
          ({coords}) => {
              setLocation({
                latitude: coords.latitude,
                longitude: coords.longitude
              });
              setHasLocation(true);
             
          },
          (err) => console.log(err),
          {
            enableHighAccuracy:true
          }
          
          );
      }, []);
    
    return {
        location
    }
}
