import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const RememberEmailButton = () => {
    return (
        <TouchableOpacity style={styles.btn} >
            <Text style={styles.textBtn} h5 >HE OLVIDADO MI CONTRASEÑA  </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    textBtn: {
        color: 'white'
    }
})

export default RememberEmailButton
