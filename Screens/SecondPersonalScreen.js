import React, { useState, useContext, useCallback } from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Button } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, CheckBox } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import SubmitButton from '../components/SubmitButton'
import UserRegistrationContext from '../Context/UserRegistrationContext'
import CheckGroup from '../components/CheckGroup'
import { useFocusEffect } from '@react-navigation/core'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const SecondPersonalScreen = ({ navigation }) => {

    const { registerInformation, setRegisterInformation } = useContext(UserRegistrationContext)
    const [date, setDate] = useState(new Date())
    const [inputDate, setInputdate] = useState('')
    const [mode, setMode] = useState('date');
    const [disableInput, setDisableInput] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        isManChecked: true,
        liveInSpain: false,
        codePost: '',
        province: '',
        town: '',
        phoneNumber: ''
    })
    const [fromSpain, setFromSpain] = useState(true)

    const [showDate, setShowDate] = useState(false)
    const { isManChecked, liveInSpain, codePost, province, town, phoneNumber } = registerInfo

    const onDatePress = () => {
        setShowDate(true)
        setDisableInput(false)
    }

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowDate(false)
        setInputdate(currentDate.toISOString().substring(0, 10))
        setDisableInput(true)
    }

    const handleLiveInSpain = () => {
        setRegisterInfo({ ...registerInfo, liveInSpain: !liveInSpain })
    }

    const handleIsMan = () => {
        setRegisterInfo({ ...registerInfo, isManChecked: !isManChecked })
    }

    const handleSubmit = () => {
        setRegisterInformation({
            ...registerInformation,
            isMan: isManChecked,
            liveInSpain: liveInSpain,
            codePost: codePost,
            province: province,
            town: town,
            birthday: inputDate,
            phoneNumber: phoneNumber
        })
        navigation.navigate('ThirdPersonalScreen')

    }

    useFocusEffect(
        useCallback(() => {
            console.log(registerInformation)
        }, [])
    );

    return (
        <View style={styles.root} >
            <ScrollView>
                <View>
                    {
                        inputDate.length > 0 && (
                            <Text style={styles.dateText}>Fecha de nacimiento</Text>
                        )
                    }
                    <Input
                        inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                        disabled={disableInput ? true : false}
                        placeholderTextColor='#DAE9F2'
                        placeholder='Fecha de nacimiento'
                        style={styles.input}
                        value={inputDate}
                        onChangeText={(newUsername) =>
                            setDate(newUsername)
                        }
                        rightIcon={
                            <Icon
                                onPress={onDatePress}
                                style={styles.formIcon}
                                name='sort-down'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </View>
                {
                    showDate &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onDateChange}
                    />
                }
                <View style={styles.genreContainer} >
                    <CheckGroup groupTitle='Genero' titleFirstOption='Hombre'
                        titleSecondOption='Mujer' boolValue={isManChecked} onPress={handleIsMan} />
                </View>
                <View style={styles.phoneContainer} >
                    <Input
                        inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                        placeholderTextColor='grey'
                        placeholder='Telefono de contacto'
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={(phoneNumber) =>
                            setRegisterInfo({ ...registerInfo, phoneNumber: phoneNumber })
                        }
                        rightIcon={
                            <Icon
                                onPress={onDatePress}
                                style={styles.formIcon}
                                name='phone'
                                size={24}
                                color='black'
                            />
                        }
                    />
                </View>
                <View style={styles.spanishContainer} >
                    <CheckGroup groupTitle='Resides en españa ?' titleFirstOption='Si'
                        titleSecondOption='No' boolValue={liveInSpain} onPress={handleLiveInSpain} />
                </View>

                <View style={styles.locationContainer} >
                    <Input
                        inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                        placeholderTextColor='grey'
                        placeholder='Codigo postal'
                        style={styles.input}
                        value={codePost}
                        onChangeText={(codepost) =>
                            setRegisterInfo({ ...registerInfo, codePost: codepost })
                        }
                    />
                    <Input
                        inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                        placeholderTextColor='grey'
                        placeholder='Provincia'
                        style={styles.input}
                        value={province}
                        onChangeText={(province) =>
                            setRegisterInfo({ ...registerInfo, province: province })
                        }
                    />
                    <Input
                        inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                        placeholderTextColor='grey'
                        placeholder='Poblacion'
                        style={styles.input}
                        value={town}
                        onChangeText={(town) =>
                            setRegisterInfo({ ...registerInfo, town: town })
                        }
                    />
                </View>
                <View style={styles.buttonContainer} >
                    <SubmitButton text='GUARDAR' onPress={handleSubmit} />
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
    input: {
        fontSize: 15,
    },
    dateText: {
        marginLeft: 10,
    },
    genreContainer: {
        flex: 1
    },
    phoneContainer: {
        flex: 1
    },

    spanishContainer: {
        flex: 2
    },
    locationContainer: {

    },
    buttonContainer: {
        marginLeft: 10,
        marginBottom: 20
    }

})

export default SecondPersonalScreen
