import React, { useState, useCallback, useContext } from 'react'
import { View, StyleSheet, Dimensions, Button, ScrollView } from 'react-native'
import { Text, CheckBox, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SubmitButton from '../components/SubmitButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckGroup from '../components/CheckGroup'
import { useFocusEffect } from '@react-navigation/core'
import UserRegistrationContext from '../Context/UserRegistrationContext'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ThirdPersonalScreen = ({ navigation }) => {

    const { registerInformation, setRegisterInformation } = useContext(UserRegistrationContext)
    const [date, setDate] = useState(new Date())
    const [inputDate, setInputDate] = useState('')
    const [showDate, setShowDate] = useState(false)
    const [mode, setMode] = useState('date');
    const [disableInput, setDisableInput] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        is_employed: true,
        has_been_employed: false,
        company: 'uam',
        position: 'researcher',
        date_employed: '',
        accept_notifications: false,
    })

    const { is_employed, company, position, has_been_employed, accept_notifications } = registerInfo

    const onDatePress = () => {
        setShowDate(true)
        setDisableInput(false)
    }

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setRegisterInfo({ ...currentDate, date: currentDate })
        setInputDate(currentDate.toISOString().substring(0, 10))
        setShowDate(false)
        setDisableInput(true)
    }

    const handleIsEmpoyed = () => {
        setRegisterInfo({ ...registerInfo, is_employed: !is_employed })
    }

    const handleHasBeenEmpoyed = () => {
        setRegisterInfo({ ...registerInfo, has_been_employed: !has_been_employed })
    }

    const handleSubmit = () => {
        setRegisterInformation({
            ...registerInformation,
            is_employed: is_employed,
            has_been_employed: has_been_employed,
            company: company,
            position: position,
            date_employed: "2021-11-02",
            accept_notifications: false,
        })
        navigation.navigate('FourthPersonalScreen')
    }

    useFocusEffect(
        useCallback(() => {
            console.log(registerInformation)
        }, [])
    );

    return (
        <View style={styles.root} >
            <ScrollView>
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
                <View style={styles.checkboxContainer} >
                    <CheckGroup groupTitle='Estas trabajando actualmente?' titleFirstOption='Si'
                        titleSecondOption='No' boolValue={is_employed} onPress={handleIsEmpoyed} />
                </View>
                {
                    is_employed == true
                        ? (
                            <View style={styles.historialContainer}>
                                <Input
                                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                                    placeholderTextColor='grey'
                                    placeholder='Empresa'
                                    style={styles.input}
                                    value={company}
                                    onChangeText={(newCompany) =>
                                        setRegisterInfo({ ...registerInfo, company: newCompany })
                                    }
                                />
                                <Input
                                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                                    placeholderTextColor='grey'
                                    placeholder='Puesto'
                                    style={styles.input}
                                    value={position}
                                    onChangeText={(newPosition) =>
                                        setRegisterInfo({ ...registerInfo, position: newPosition })
                                    }
                                />
                                <Input
                                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                                    placeholderTextColor='#DAE9F2'
                                    placeholder='Fecha de inicio'
                                    style={styles.input}
                                    value={inputDate}
                                    onChangeText={(newDate) =>
                                        setRegisterInfo({ ...registerInfo, date_employed: newDate })
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
                        )
                        : (
                            <View style={styles.checkboxContainer} >
                                <CheckGroup groupTitle='Has trabajado antes ?' titleFirstOption='Si'
                                    titleSecondOption='No' boolValue={has_been_employed} onPress={handleHasBeenEmpoyed} />
                            </View>
                        )
                }
                {
                    has_been_employed && <View style={styles.historialContainer}>
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Empresa'
                            style={styles.input}
                            value={company}
                            onChangeText={(newCompany) =>
                                setRegisterInfo({ ...registerInfo, company: newCompany })
                            }
                        />
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Posicion'
                            style={styles.input}
                            value={position}
                            onChangeText={(newPosition) =>
                                setRegisterInfo({ ...registerInfo, position: newPosition })
                            }
                        />
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='#DAE9F2'
                            placeholder='Fecha de inicio'
                            style={styles.input}
                            value={inputDate}
                            onChangeText={(newDate) =>
                                setRegisterInfo({ ...registerInfo, date: newDate })
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
                }

                <View style={styles.checkContainer} >
                    <CheckBox
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        checked={accept_notifications}
                        onPress={() => setRegisterInfo({ ...registerInfo, accept_notifications: !accept_notifications })}
                    />
                    <Text style={styles.checkBoxText}
                        numberOfLines={2}
                        h5>Quiero recibir ofertas de empleo  basadas en mi puesto de trabajo y provincia
                    </Text>
                </View>
                <View style={styles.buttonContainer} >
                    <SubmitButton text='GUARDAR Y CONTINUAR' onPress={handleSubmit} />
                </View>
                <Button title='Irrr' onPress={() => navigation.navigate('FourthPersonalScreen')} />
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
    genreText: {
        marginLeft: 15,
        color: 'grey'
    },
    checkboxContainer: {

    },
    historialContainer: {

    },
    input: {
        fontSize: 15,
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 2
    },
    checkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        flex: 1
    },
    checkBoxText: {

    }
})
export default ThirdPersonalScreen
