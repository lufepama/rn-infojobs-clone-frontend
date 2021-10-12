import React, { useState } from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native-elements'
import SubmitButtonSimple from '../components/SubmitButtonSimple'
import SubmitButton from '../components/SubmitButton'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const SigninScreen = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.root} >
            <Image
                style={styles.image}
                source={require('../images/infoLogo.png')}
            />
            <View style={styles.mainContainer} >
                <Input
                    inputContainerStyle={{ borderBottomColor: 'white', borderBottomWidth: 2 }}
                    placeholderTextColor='#DAE9F2'
                    placeholder='usuario'
                    style={styles.input}
                    value={username}
                    onChangeText={(newUsername) =>
                        setUsername(newUsername)
                    }
                />

                <Input
                    inputContainerStyle={{ borderBottomColor: 'white', borderBottomWidth: 2 }}
                    placeholderTextColor='#DAE9F2'
                    placeholder='contraseña'
                    style={styles.input}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
                <SubmitButton text='ENTRAR EN INFOJOBS' />
                <SubmitButtonSimple navigation={navigation} text='DARSE DE ALTA' />
            </View>
            <TouchableOpacity style={styles.rememberBtn} >
                <Text style={styles.textBtn} h5 >HE OLVIDADO MI CONTRASEÑA  </Text>
            </TouchableOpacity>

        </View >
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#167db7',
        height: windowHeight,
        width: windowWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    image: {
        width: 200,
        height: 200,
        flex: 0.5
    },
    mainContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
    input: {
        flex: 1,
        backgroundColor: '#1A96DB',
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        color: 'white',
    },
    sendBtn: {
        width: '95%',
        backgroundColor: '#ff6340',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    textBtn: {
        color: 'white'
    },
    signupBtn: {
        marginTop: 10,
        width: '95%',
        alignItems: 'center',
    },
    rememberBtn: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    }
})

export default SigninScreen
