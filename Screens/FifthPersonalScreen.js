import React, { useContext, useCallback, useState } from 'react'
import { View, StyleSheet, Image, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Text, Input } from 'react-native-elements'
import SubmitButton from '../components/SubmitButton'
import SubmitButtonSimple from '../components/SubmitButtonSimple'
import { useFocusEffect } from '@react-navigation/core'
import UserRegistrationContext from '../Context/UserRegistrationContext'
import { sendVerificationCode } from '../Helper/sendVerificationCode'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FifthPersonalScreen = ({ navigation }) => {

    const { registerInformation, setRegisterInformation } = useContext(UserRegistrationContext)
    const [verificationCode, setVerificationCode] = useState('')
    const [buttonText, setButtonText] = useState('Enviar codigo')
    const [isButtonDisable, setIsButtonDissable] = useState(false)
    const [showVerification, setShowVerification] = useState(false)
    const [timer, setTimer] = useState(10)

    const { email } = registerInformation

    const handleSubmit = async () => {
        if (!email) return;
        setIsButtonDissable(true)
        const response = await sendVerificationCode(email)
        const { success, error } = response
        if (success) {
            setShowVerification(true)
            setIsButtonDissable(false)
            setButtonText('Reenviar el codigo')
        }
    }

    if (timer === 0) {
        console.log('Paraaaaao')
    }

    useFocusEffect(
        useCallback(() => {

        }, [])
    );

    return (
        <View style={styles.root}>
            <ScrollView>
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
                    <SubmitButton text={buttonText} onPress={handleSubmit} isDisable={isButtonDisable} />
                    <SubmitButtonSimple navigation={navigation} text='AYUDA' color='#167db7' />
                    {
                        showVerification
                            ? (
                                <View style={styles.verificationContainer} >
                                    <Input
                                        inputContainerStyle={{
                                            borderBottomWidth: 0, justifyContent: 'center',
                                            alignItems: 'center', marginLeft: 25,
                                        }}
                                        placeholderTextColor='#DAE9F2'
                                        placeholder='Codigo...'
                                        style={styles.input}
                                        value={verificationCode}
                                        onChangeText={(code) => setVerificationCode(code)}
                                    />
                                    <TouchableOpacity style={styles.bottomContainer} >
                                        <Text>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            : null
                    }

                </View>
            </ScrollView>
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
        paddingTop: windowHeight / 15,
        paddingBottom: windowHeight / 20
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
    },
    input: {
        borderWidth: 1,
        height: '100%',
        flex: 2,
        borderRadius: 10,
        borderColor: 'gray'
    },
    bottomContainer: {
        backgroundColor: 'red',
        height: 40,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    verificationContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: 50,
        justifyContent: 'center'
    }
})

export default FifthPersonalScreen
