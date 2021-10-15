import React, { useState, useContext } from 'react'
import { View, StyleSheet, Button, Dimensions } from 'react-native'
import { Text, CheckBox, Input, LinearProgress, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SubmitButton from '../components/SubmitButton'
import UserRegistrationContext from '../Context/UserRegistrationContext'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FirstPersonalScreen = ({ navigation }) => {

    const { registerInformation, setRegisterInformation } = useContext(UserRegistrationContext)
    const [showPassword, setShowPassword] = useState(true)
    const [strongPassword, setStrongPassword] = useState({
        strongPasswordText: '',
        strongPasswordColor: 'transparent',
        strongPasswordValue: 0
    })
    const [registerInfo, setRegisterInfo] = useState({
        first_name: 'Martina',
        last_name: 'Paz',
        email: 'martina@gmail.com',
        password: 'trial',
        username: 'martinita11',
        accept_terms: false
    })

    const { first_name, last_name, email, password, accept_terms, username } = registerInfo
    const { strongPasswordText, strongPasswordColor, strongPasswordValue } = strongPassword

    const onShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {
        setRegisterInformation({
            ...registerInformation,
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
            accept_terms: accept_terms
        })
        navigation.navigate('SecondPersonalScreen')
    }


    return (
        <View style={styles.root} >
            <View style={styles.personalContainer} >
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Usuario'
                    style={styles.input}
                    value={username}
                    onChangeText={(username) =>
                        setRegisterInfo({ ...registerInfo, username: username })
                    }
                />
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Nombre'
                    style={styles.input}
                    value={first_name}
                    onChangeText={(firstName) =>
                        setRegisterInfo({ ...registerInfo, firstName: firstName })
                    }
                />
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Primer apellido'
                    style={styles.input}
                    value={last_name}
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
                    checked={accept_terms}
                    onPress={() => setRegisterInfo({ ...registerInfo, accept_terms: !accept_terms })}
                />
                <Text style={styles.checkBoxText}
                    numberOfLines={2}
                    h5>Quiero recibir ofertas de empleo  basadas en mi puesto de trabajo y provincia
                </Text>
            </View>
            <View style={styles.buttonContainer} >
                <SubmitButton text='CONTINUAR' onPress={handleSubmit} />
            </View>
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
