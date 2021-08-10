import React from "react";
import { Alert } from "react-native";

export function showalert (mensaje) {
    Alert.alert(
        "Rentall",
        mensaje,
        [
          { text: "OK"
          // , onPress: () => console.log("OK Pressed") 
          }
        ]
    );
}