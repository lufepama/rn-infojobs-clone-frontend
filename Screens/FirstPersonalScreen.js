import React, { useState } from 'react'
import { View, StyleSheet, Button, Dimensions } from 'react-native'
import { Text, CheckBox, Input, LinearProgress, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SubmitButton from '../components/SubmitButton'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FirstPersonalScreen = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(true)
    const [strongPassword, setStrongPassword] = useState({
        strongPasswordText: '',
        strongPasswordColor: 'transparent',
        strongPasswordValue: 0
    })
    const [registerInfo, setRegisterInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        acceptNotifications: false
    })

    const onShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const { firstName, lastName, email, password, acceptNotifications } = registerInfo
    const { strongPasswordText, strongPasswordColor, strongPasswordValue } = strongPassword

    return (
        <View style={styles.root} >
            <View style={styles.personalContainer} >
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Nombre'
                    style={styles.input}
                    value={firstName}
                    onChangeText={(firstName) =>
                        setRegisterInfo({ ...registerInfo, firstName: firstName })
                    }
                />
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Primer apellido'
                    style={styles.input}
                    value={lastName}
                    onChangeText={(lastName) =>
                        setRegisterInfo({ ...registerInfo, lastName: lastName })
                    }
                />
            </View>
            <View style={styles.personalContainer}>
                <Text style={styles.emailText}>DATOS DE LA CUENTA</Text>
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Correo electronico'
                    style={styles.input}
                    value={email}
                    onChangeText={(email) =>
                        setRegisterInfo({ ...registerInfo, email: email })
                    }
                />
            </View>
            <View>
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    secureTextEntry={showPassword}
                    placeholder='Contraseña'
                    caretHidden={true}
                    style={styles.input}
                    value={password}
                    onChangeText={(password) => {

                        if (!password) {
                            setStrongPassword({
                                ...strongPassword, strongPasswordText: '',
                                strongPasswordValue: 0, strongPasswordColor: 'transparent'
                            })
                        }
                        else if (password.length <= 3) {
                            setStrongPassword({
                                ...strongPassword, strongPasswordText: 'Debil',
                                strongPasswordValue: 0.2, strongPasswordColor: 'red'
                            })

                        } else if (password.length >= 4 && password.length < 5) {
                            setStrongPassword({
                                ...strongPassword, strongPasswordText: 'Medio',
                                strongPasswordValue: 0.5, strongPasswordColor: 'orange'
                            })
                        } else {
                            setStrongPassword({
                                ...strongPassword, strongPasswordText: 'Fuerte',
                                strongPasswordValue: 1, strongPasswordColor: 'green'
                            })
                        }
                        setRegisterInfo({ ...registerInfo, password: password })
                    }
                    }
                    rightIcon={
                        <Icon
                            style={styles.formIcon}
                            onPress={onShowPassword}
                            name='eye'
                            size={24}
                            color='black'
                        />
                    }
                />
                {
                    strongPasswordText.length > 0
                        ? (
                            <View style={styles.progressContainer} >
                                <Text style={styles.securityText} >Seguridad:{strongPasswordText}</Text>
                                <LinearProgress style={styles.progressBar} value={strongPasswordValue} variant='determinate' color={strongPasswordColor} />
                            </View>
                        )
                        : null
                }

            </View>
            <View style={styles.checkContainer} >
                <CheckBox
                    containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                    checked={acceptNotifications}
                    onPress={() => setRegisterInfo({ ...registerInfo, acceptNotifications: !acceptNotifications })}
                />
                <Text style={styles.checkBoxText}
                    numberOfLines={2}
                    h5>Quiero recibir ofertas de empleo  basadas en mi puesto de trabajo y provincia
                </Text>
            </View>
            <View style={styles.buttonContainer} >
                <SubmitButton text='CONTINUAR' />
            </View>
            <Button title='Irrr' onPress={() => navigation.navigate('SecondPersonalScreen')} />

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
    input: {
        fontSize: 15,
    },
    personalContainer: {

    },
    emailText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressBar: {
        width: '93%'
    },
    securityText: {
        marginLeft: 10
    },
    checkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        flex: 1
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 2
    },
})

export default FirstPersonalScreen
