import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {validateEmail} from '../utils/Validations';
import {showalert} from '../utils/ShowAlert';
import firebase from '../utils/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function RegisterScreen(props) {
  const {changeForm} = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatpassword, setRpassword] = useState();

  const register = () => {
    if (!email || !password || !repeatpassword) {
      showalert("Se requieren todos los campos.");
    } else if (!validateEmail(email)) {
      setEmail();
      showalert("Formato de correo incorrecto.");
    } else if (password !== repeatpassword) {
      showalert("Las contraseñas no coinciden.");
    } else if (password.length < 6) {
      showalert("La contraseña requiere más de 6 caracteres.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          setEmail();
          setPassword();
          setRpassword();
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
      <FormInput
        placeholderText="Repetir Contraseña"
        iconType="lock"
        secureTextEntry={true}
        labelValue={repeatpassword}
        onChangeText={(repeatpassword) => setRpassword(repeatpassword)}
      />
      <FormButton
        buttonTitle="Registrate"
        onPress={register}
      />
      <FormButton
        buttonTitle="Iniciar Sesión"
        onPress={changeForm}
      />
    </>
  );
}
