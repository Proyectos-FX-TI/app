import React, {useState} from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import {ScaledSheet} from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from '../components/Button';


export default function ProfileScreen({navigation, route}) {
  const [userData, setUserData] = useState(null);
  const {user} = route.params;
  return(
    <View style={{backgroundColor:'white', flex: 1}}>
    
      <ScrollView>
      
      <View>
        <View style={styles.proView}>
          <View style={styles.details}>
              <View>
                  <Image
                    source={{uri: userData ? userData.userImg || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
                  style={styles.userPicture}
                  />
              </View>
              <View style={styles.info}>
                <TouchableOpacity  onPress={() => {
                      navigation.navigate('EditPerfil',{
                        user: user
                      });
                    }} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Editar perfil</Text>
              </TouchableOpacity>
              </View>
          </View>
          <View>
              <Text style={styles.username}>Cristian Carrasco</Text>
              <Text style={styles.status}>chis@outlook.com</Text>
              <View style={styles.personal}>
                <View style={styles.locale}>
                  <FontAwesome name="map-marker" style={styles.icon} size={22}  />
                  <Text style={styles.location}>Orizaba Veracruz, México.</Text>
                </View>
              </View>
              
              <View style={styles.personal}>
                <View style={styles.locale}>
                  <FontAwesome name="map-pin" style={styles.icon} size={22}  />
                  <Text style={styles.location}>Norte 14, Oriente 27 y 25 Santa Cruz 94320.</Text>
                </View>
              </View>
              
              <View style={styles.personal}>
                <View style={styles.locale}>
                  <FontAwesome name="phone" style={styles.icon} size={22}  />
                  <Text style={styles.location}>2727039740.</Text>
                </View>
              </View>

          </View>
        </View>
        <View>
        </View>
          <View style={styles.posts}>
            <View style={styles.postImgView}>
                <TouchableOpacity>
                <Image
                source={{
                  uri: 'https://centralelectoral.ine.mx/wp-content/uploads/2020/02/qr-1.jpg'
                }}
                
                style={styles.postImg}
                />
                </TouchableOpacity>
            </View>
          </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  proView:{
    marginHorizontal:'3%',
    marginTop:'2%'
  },
  details:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  userPicture:{
      borderRadius:50,
      width:90,
      height:90
  },
  info:{
      marginLeft:'2%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexGrow:1
  },
  numView:{
      padding:'8@s'
  },
  infoNum:{
    color:'black',
      fontSize:'18@s',
      textAlign:'center'
  },
  infoType:{
    color:'black',
      fontSize:'12@s'
  },
  username:{
      color:'black',
      marginTop:4,
      fontWeight:'bold',
      fontSize:'22@ms'
  },
  status:{
    color:'black',
    fontSize:'16@ms',
    marginTop:5,
    paddingRight:30
  },
  locale:{
    flexDirection:'row',
    marginRight:'2%',
    marginVertical: '2%',
  },
  location:{
    fontSize:15,
    marginLeft:2,
    color:'#686868'
  },
  personal:{
    marginTop:'2%',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  posts:{
    marginTop:50,
    marginBottom:150,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'stretch'
  },
  postImg:{
    width:'100%',
    height:'100%',
  },
  postImgView:{
    width:250,
    height:150,
    marginLeft:5
  },
  icon: {
    fontWeight: 'bold',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: '20%'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

})