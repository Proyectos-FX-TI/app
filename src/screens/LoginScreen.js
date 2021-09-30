import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {validateEmail} from '../utils/Validations';
import firebase from '../utils/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {showalert} from '../utils/ShowAlert';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function LoginScreen(props) {
  const {changeForm} = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const {fbLogin} = useContext(AuthContext);

  const login = () => {

    if (!email || !password) {
      showalert("Se requieren todos los campos.");
    } else if (!validateEmail(email)) {
      setEmail();
      showalert("Formato de correo incorrecto.");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          setEmail();
          setPassword();
          //console.log(error);
          showalert(error.message);
        });
    }
    
  };

  return (
    <>
      <FormInput
        placeholderText="Correo electronico"
        iconType="user"
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        placeholderText="Contraseña"
        iconType="lock"
        secureTextEntry={true}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        buttonTitle="Iniciar Sesión"
        onPress={login}
      />
      <FormButton
        buttonTitle="Registrate"
        onPress={changeForm}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>¿Has olvidado tu contraseña?</Text>
      </TouchableOpacity>
      <View>
          <SocialButton
            buttonTitle="Iniciar sesión con Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={()=>fbLogin()}
          />
          <SocialButton
            buttonTitle="Inicia sesión con Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
          />
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  register: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  error: {
    borderColor: '#940c0c',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
