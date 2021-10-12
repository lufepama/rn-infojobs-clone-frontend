import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Button } from 'react-native'
import { Text, CheckBox, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SubmitButton from '../components/SubmitButton'
import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ThirdPersonalScreen = ({ navigation }) => {

    const [inputDate, setInputDate] = useState('')
    const [showDate, setShowDate] = useState(false)
    const [mode, setMode] = useState('date');
    const [disableInput, setDisableInput] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        isEmployed: false,
        company: '',
        position: '',
        date: new Date(),
        town: '',
        acceptNotifications: false,
    })

    const { isEmployed, company, position, date, town, acceptNotifications } = registerInfo

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

    return (
        <View style={styles.root} >
            <Text style={styles.genreText}>  Estas trabajando actualmente?</Text>
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
                <CheckBox
                    containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                    title='Si'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={isEmployed}
                    onPress={() => setRegisterInfo({ ...registerInfo, isEmployed: true })}
                />
                <CheckBox
                    containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                    title='No'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!isEmployed}
                    onPress={() => setRegisterInfo({ ...registerInfo, isEmployed: false })}
                />
            </View>

            <View style={styles.historialContainer}>
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Provincia'
                    style={styles.input}
                    value={company}
                    onChangeText={(newCompany) =>
                        setRegisterInfo({ ...registerInfo, company: newCompany })
                    }
                />
                <Input
                    inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                    placeholderTextColor='grey'
                    placeholder='Poblacion'
                    style={styles.input}
                    value={town}
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
                <SubmitButton text='GUARDAR Y CONTINUAR' />
            </View>
            <Button title='Irrr' onPress={() => navigation.navigate('FourthPersonalScreen')} />

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
