import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, Button, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useForm } from '../hooks/useForm';


export const EditPostScreen = ({ navigation, route }) => {

  const {post} = route.params;
console.log(post);

    const { _id, user_id, coordinate, title, description, image, price, costo, form, onChange, setFormValue } = useForm({
        _id: '',
        user_id: '',
        coordinate: '',
        title: '',
        description: '', 
        image:'',
        price: '',
        costo:'',
    });


    useEffect(() => {
        navigation.setOptions({
            title: ( post.title ) ? post.title : 'Sin nombre de producto'
        });
    }, [post.title])

    useEffect(() => {
        loadProduct();
    }, [])


    const loadProduct = async() => {
        
        setFormValue({
            _id: post.id,
            title: post.title,
            price: post.price,
            costo: post.costo
            //img: product.img || '',
            //nombre
        })
    }


    return (
        <View style={ styles.container }>
            
            <ScrollView>

                <Text style={ styles.label }>Nombre del producto:</Text>
                <TextInput 
                    placeholder="Titulo"
                    style={ styles.textInput }
                    value={ post.title }
                    onChangeText={ ( value )=> onChange( value, 'title' )  }
                />

                <TextInput 
                    placeholder="Descripción"
                    style={ styles.textInput }
                    value={ post.description }
                    onChangeText={ ( value )=> onChange( value, 'description' )  }
                />

                <TextInput 
                    placeholder="Precio"
                    style={ styles.textInput }
                    value={ post.price.toString() }
                    onChangeText={ ( value )=> onChange( value, 'price' )  }
                />

                <TextInput 
                    placeholder="Costo"
                    style={ styles.textInput }
                    value={ post.costo.toString() }
                    onChangeText={ ( value )=> onChange( value, 'costo' )  }
                />

                <Button 
                    title="Guardar"
                    onPress={ console.log('ok') }
                    color="#5856D6"
                />
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15
    }
});
