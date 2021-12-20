import React, {useState} from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from '../utils/firebase';

const image = { uri: "https://i.pinimg.com/originals/c1/e9/4e/c1e94e8ae2a15045ef82eb674330a38a.jpg" };

export default function ProfileScreen({navigation, route}) {
  const {user} = route.params;
  const [userData, setUserData] = useState(null);

  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.cardContainer}>
        <View style={styles.containerIne}>
          <Image   
          source={{
            uri: 'https://centralelectoral.ine.mx/wp-content/uploads/2020/02/qr-1.jpg'
          }}
          style={styles.imageIne}
          />
          <View style={styles.containerImgProf}>
            <Image
            source={{uri: userData ? userData.userImg || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}     
            style={styles.imageProfie}
            />
          </View>
        </View>
        <View style={styles.containerAbout}>
          <Text style={styles.name}>Cristian Carrasco</Text>
          <Text style={styles.mail}>chis@outlook.com</Text>
            <View style={styles.personal}>
              <View style={styles.locale}>
                <FontAwesome name="map-marker" style={styles.icon} size={22}  />
                <Text style={styles.location}>Orizaba Veracruz, México.</Text>
              </View>
            </View>
            
            <View style={styles.personal}>
              <View style={styles.locale}>
                <FontAwesome name="map-pin" style={styles.icon} size={22}  />
                <Text style={styles.location}>Norte 14.</Text>
              </View>
            </View>
            <View style={styles.personal}>
              <View style={styles.locale}>
                <FontAwesome name="map-pin" style={styles.icon} size={22}  />
                <Text style={styles.location}>Oriente 27 y 25.</Text>
              </View>
            </View>
            
            <View style={styles.personal}>
              <View style={styles.locale}>
                <FontAwesome name="phone" style={styles.icon} size={22}  />
                <Text style={styles.location}>2727039740.</Text>
              </View>
            </View>
        </View>

        <View style={styles.containerBtn}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('EditPerfil',{
              user: user
            });
          }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Editar perfil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => firebase.auth().signOut()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Cerrar sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </ImageBackground>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  cardContainer: {
    //marginHorizontal: 10,
    backgroundColor: 'white',
    marginHorizontal: 55,
    height: '70%',
    width: '70%',
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageIne: {
    width: '100%',
    height: 140,
    marginBottom:10,
    
    position: 'absolute',
  },
  containerImgProf:{
    top: 90,
    alignSelf: 'center',
    borderRadius:50,
    width:90,
    height:90,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
   
  },
  containerIne:{
    margin: 8,
    borderRadius:10
  },
  imageProfie:{
    borderRadius:50,
    width:75,
    height:75,
    margin: 7
  },
  containerAbout:{
    alignSelf:'center',
    top:95
  },
  name:{
    fontWeight: 'bold',
    alignSelf:'center'
  },
  mail:{
    color:'black',
    fontSize:16,
    marginVertical: 5,
    alignSelf:'center'
  },
  personal:{
    marginTop:'2%',
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center'
  },
  locale:{
    flexDirection:'row',
    marginRight:'2%',
    marginVertical: 5,
    alignSelf:'center'
  },
  icon:{
    paddingRight: 5
  },
  containerBtn:{
    alignSelf:'center',
    top: 105,
    flexDirection: 'row'
  },
  btn:{
    width: 90,
    height: 40,
    marginHorizontal: 20,
    borderRadius:10,
    backgroundColor: '#d147a3'
  },
  btnText:{
    marginTop: 9,
    alignSelf: 'center',
    color: 'white'
  }


});