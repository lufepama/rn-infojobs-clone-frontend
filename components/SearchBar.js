import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchBar = () => {

    const [input, setInput] = useState('')


    return (
        <View style={styles.root}>
            <View style={styles.container} >
                <Input
                    inputContainerStyle={{
                        borderBottomColor: '#167db7', borderBottomWidth: 0, alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    placeholderTextColor='#DAE9F2'
                    placeholder='Puesto, empresa o palabra clave'
                    placeholderTextColor='gray'
                    style={styles.input}
                    value={input}
                    onChangeText={(newUsername) =>
                        setDate(newUsername)
                    }
                    leftIcon={
                        <Icon
                            style={styles.formIcon}
                            name='search'
                            size={27}
                            color='#167db7'
                        />
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
    },
    container: {
        borderWidth: 1,
        borderColor: '#F5FBFC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 320,
        paddingTop: 20,
        height: 60
    },
    input: {

    },
    formIcon: {

    }
})

export default SearchBar
