import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Button } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, CheckBox } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import SubmitButton from '../components/SubmitButton'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const SecondPersonalScreen = ({ navigation }) => {

    const [date, setDate] = useState(new Date())
    const [inputDate, setInputdate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [mode, setMode] = useState('date');
    const [disableInput, setDisableInput] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        isManChecked: false,
        isWomanChecked: false,
        spanish: false,
        foreign: false,
        codePost: '',
        province: '',
        town: ''
    })
    const [fromSpain, setFromSpain] = useState(true)

    const [showDate, setShowDate] = useState(false)
    const { isManChecked, isWomanChecked, spanish, foreign, codePost, province, town } = registerInfo

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

    const onGenrePress = (genre) => {
        if (genre) {
            //Masc
            setGenre({ ...genre, isManChecked: true })
            return;
        }
        setGenre({ ...genre, isWomanChecked: true })

    }


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
                    <Text style={styles.genreText} >Genero</Text>
                    <CheckBox
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        title='Hombre'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={isManChecked}
                        onPress={() => setRegisterInfo({ ...registerInfo, isManChecked: true, isWomanChecked: false })}
                    />
                    <CheckBox
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        title='Mujer'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={isWomanChecked}
                        onPress={() => setRegisterInfo({ ...registerInfo, isManChecked: false, isWomanChecked: true })}
                    />
                </View>
                <View style={styles.phoneContainer} >
                    <Input
                        inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                        placeholderTextColor='grey'
                        placeholder='Telefono de contacto'
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={(newUsername) =>
                            setPhoneNumber(newUsername)
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
                    <Text style={styles.genreText} >Resides en españa ?</Text>
                    <CheckBox
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        title='Si'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={spanish}
                        onPress={() => setRegisterInfo({ ...registerInfo, spanish: true, foreign: false })}
                    />
                    <CheckBox
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        title='No'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={foreign}
                        onPress={() => setRegisterInfo({ ...registerInfo, spanish: false, foreign: true })}
                    />
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
                    <SubmitButton text='GUARDAR' />
                </View>
                <Button title='Irrr' onPress={() => navigation.navigate('ThirdPersonalScreen')} />

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
