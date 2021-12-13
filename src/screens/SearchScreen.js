import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import feed from '../../../assets/data/feed';
import Post from '../components/Post'

import {markers} from '../model/mapData'
import { SearchInput } from '../components/SearchInput'


const screenWidth = Dimensions.get('window').width;



export const SearchScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
    
        <Post post={item} navigation={navigation} />
      );


      const { top } = useSafeAreaInsets();

      const [ term, setTerm ] = useState('');
      const [productFiltered, setProductFiltered] = useState([])

      useEffect(() => {
        
        if ( term.length === 0 ) {
            return setProductFiltered([]);
        }

        console.log(isNaN( Number(term) ))

        if ( isNaN( Number(term) ) ) {
            setProductFiltered(
                markers.filter( 
                    (product) => product.title.toLocaleLowerCase()
                        .includes( term.toLocaleLowerCase() )
                )
            );
        }




    }, [term])

    return (
        <View style={{ 
            flex: 1, 
            marginHorizontal: 20,
        }}>
            
            <SearchInput
                onDebounce={ (value) => setTerm( value )  }
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: top + 15
                }}
            />

            <FlatList
                data={productFiltered}
                renderItem={renderItem}
                keyExtractor={index => index.id} />
        </View>
    )
}


