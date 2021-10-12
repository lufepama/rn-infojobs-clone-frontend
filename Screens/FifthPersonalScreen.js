import React from 'react'
import { View, StyleSheet, Image, Dimensions, Button } from 'react-native'
import { Text } from 'react-native-elements'
import SubmitButton from '../components/SubmitButton'
import SubmitButtonSimple from '../components/SubmitButtonSimple'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FifthPersonalScreen = ({ navigation }) => {
    return (
        <View style={styles.root} >
            <View style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={require('../images/confirmLogo.png')}
                />
                <View style={styles.firstContainer} >
                    <Text h4 >Solo falta que verifiques tu email</Text>
                    <Text >Para verificarla, clica en el enlace que </Text>
                    <Text>te hemos enviado: lufepama@gmail.com</Text>
                </View>
                <View style={styles.secondContainer} >
                    <Text >No lo has recibido? Revisa tu carpeta de spam o </Text>
                    <Text>a;ade pushinfojobs@push.infojobs.net a remitentes</Text>
                    <Text>seguros y pulsa reenviar</Text>
                </View>
                <SubmitButton text='Reenviar' />
                <SubmitButtonSimple navigation={navigation} text='AYUDA' color='#167db7' />
            </View>
            <Button title='Irrr' onPress={() => navigation.navigate('FirstPersonalScreen')} />

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        height: windowHeight,
        width: windowWidth,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: windowHeight / 15
    },
    image: {
        width: windowWidth / 2 * 1.8,
        height: windowHeight / 3 * 1.2,
        resizeMode: 'contain',
    },
    firstContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    secondContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10
    }
})

export default FifthPersonalScreen
