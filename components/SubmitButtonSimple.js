import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const SubmitButtonSimple = ({ navigation, text, color = 'white' }) => {
    return (
        <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('FirstPersonalScreen')} >
            <Text style={{ color: color }} h5>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    signupBtn: {
        marginTop: 10,
        width: '95%',
        alignItems: 'center',
    },
})

export default SubmitButtonSimple
