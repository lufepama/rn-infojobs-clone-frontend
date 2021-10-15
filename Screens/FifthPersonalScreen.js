import React, { useContext, useCallback, useState } from 'react'
import { View, StyleSheet, Image, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Text, Input } from 'react-native-elements'
import SubmitButton from '../components/SubmitButton'
import SubmitButtonSimple from '../components/SubmitButtonSimple'
import { useFocusEffect } from '@react-navigation/core'
import UserRegistrationContext from '../Context/UserRegistrationContext'
import { sendVerificationCode } from '../Helper/sendVerificationCode'
import { signup } from '../Helper/signup'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FifthPersonalScreen = ({ navigation }) => {

    const { registerInformation, setRegisterInformation } = useContext(UserRegistrationContext)
    const [verificationCode, setVerificationCode] = useState({
        codeInput: '',
        code: '',
        isCorrect: '',
        showVerification: false,
        codeMessage: ''
    })
    const [buttonText, setButtonText] = useState('Enviar codigo')
    const [isButtonDisable, setIsButtonDissable] = useState(false)
    const [timer, setTimer] = useState(10)

    const { codeInput, code, isCorrect, showVerification, codeMessage } = verificationCode
    const userData = registerInformation
    const { email, username, password } = userData

    const handleSubmit = async () => {
        if (!email) return;
        setIsButtonDissable(true)
        setVerificationCode({ ...verificationCode, codeInput: '', codeMessage: '' })

        const response = await sendVerificationCode(email)
        const { success, error, code } = response
        if (success) {
            console.log(code)
            setVerificationCode({ ...verificationCode, showVerification: true, code: code, codeMessage: '' })
            setIsButtonDissable(false)
            setButtonText('Reenviar el codigo')
        }
    }

    const handleCodeSubmit = async () => {
        if (codeInput === code) {
            setVerificationCode({ ...verificationCode, codeInput: '', codeMessage: 'Cuenta creada satisfactoriamente, puedes inicar sesion' })
            console.log(userData)
            const response = await (signup(userData))

            const { success } = response
            console.log('success', success)

            return;
        }
        setVerificationCode({ ...verificationCode, codeInput: '', codeMessage: 'El codigo que has introducido no es correcto' })
    }

    useFocusEffect(
        useCallback(() => {
            console.log(registerInformation)
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
                                        value={codeInput}
                                        onChangeText={(code) => setVerificationCode({ ...verificationCode, codeInput: code })}
                                    />
                                    <TouchableOpacity style={styles.bottomContainer} onPress={handleCodeSubmit} >
                                        <Text>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            : null
                    }
                    {
                        codeMessage.length > 0
                            ? <Text>{codeMessage}</Text>
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
