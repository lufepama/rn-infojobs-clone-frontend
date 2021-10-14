import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const SubmitButton = ({ text, onPress, isDisable }) => {
    return (
        <TouchableOpacity style={{
            width: '95%',
            backgroundColor: '#ff6340',
            alignItems: 'center',
            height: 50,
            justifyContent: 'center',

        }} onPress={onPress} disabled={isDisable ? true : false} >
            <Text style={styles.textBtn} h5>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textBtn: {
        color: 'white'
    },
    sendBtn: {
        width: '95%',
        backgroundColor: '#ff6340',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
})

export default SubmitButton
