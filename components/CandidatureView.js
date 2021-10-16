import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from 'react-native-elements'

const CandidatureView = () => {
    return (
        <View style={styles.root} >
            <View style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={require('../images/candidaturas.jpg')}
                />
                <View style={styles.messageContainer} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Aun no tienes candidaturas</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Cuando te inscribas a una oferta, aqui es donde podras</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>hacer seguimiento de su estado</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    messageContainer: {
        alignItems: 'center'
    }
})

export default CandidatureView
