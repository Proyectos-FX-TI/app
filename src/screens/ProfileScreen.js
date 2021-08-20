import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import firebase from '../utils/firebase';
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();

export default function ProfileScreen({ navigation, route }) {
    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);
    const {user} = route.params;
    // console.log(route.params);
    //console.log(navigation);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>
            <Image
              style={styles.userImg}
              source={{uri: userData ? userData.userImg || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
            />
            <Text style={styles.userName}>
              {user.email}
            </Text>
            {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
            <Text style={styles.aboutUser}>
            {userData ? userData.about || 'No se agregaron detalles.' : ''}
            </Text>
            <View style={styles.userBtnWrapper}>
              {/* {route.params ? (
                <>
                  <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                    <Text style={styles.userBtnTxt}>Message</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                    <Text style={styles.userBtnTxt}>Follow</Text>
                  </TouchableOpacity>
                </>
              ) : ( */}
                <>
                  <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => {
                      navigation.navigate('EditPerfil',{
                        user: user
                      });
                    }}
                    >
                    <Text style={styles.userBtnTxt}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userBtn} 
                  onPress={() => firebase.auth().signOut()}
                  >
                    <Text style={styles.userBtnTxt}>Cerrar Sesión</Text>
                  </TouchableOpacity>

                  
                  
                </>
              {/* )} */}
            </View>
    
            <View style={styles.userInfoWrapper}>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>{posts.length}</Text>
                <Text style={styles.userInfoSubTitle}>Publicaciones</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>10,000</Text>
                <Text style={styles.userInfoSubTitle}>Seguidores</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>100</Text>
                <Text style={styles.userInfoSubTitle}>Seguidos</Text>
              </View>
            </View>
    
            {/* {posts.map((item) => (
              <PostCard key={item.id} item={item} onDelete={handleDelete} />
            ))} */}
          </ScrollView>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
});