import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Button } from 'react-native'
import { Text, CheckBox, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SubmitButton from '../components/SubmitButton'
import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FourthPersonalScreen = ({ navigation }) => {

    const [showInitialDate, setShowInitialDate] = useState(false)
    const [mode, setMode] = useState('date');
    const [registerInfo, setRegisterInfo] = useState({
        hasStudies: false,
        title: '',
        speciality: '',
        initialDate: new Date(),
        finalDate: new Date(),
        center: '',
    })

    const { hasStudies, title, speciality, initialDate, finalDate, center } = registerInfo



    return (
        <View style={styles.root} >
            <Text style={styles.genreText}>  Que estudios tienes?</Text>
            {
                showInitialDate &&
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
                    title='Especificar estudios'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={hasStudies}
                    onPress={() => setRegisterInfo({ ...registerInfo, hasStudies: !hasStudies })}
                />
                <CheckBox
                    containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                    title='No tengo estudios'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!hasStudies}
                    onPress={() => setRegisterInfo({ ...registerInfo, hasStudies: !hasStudies })}
                />
            </View>
            {
                hasStudies && (
                    <View style={styles.historialContainer}>
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Titulo'
                            style={styles.input}
                            value={title}
                            onChangeText={(title) =>
                                setRegisterInfo({ ...registerInfo, title: title })
                            }
                        />
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Especialidad'
                            style={styles.input}
                            value={speciality}
                            onChangeText={(speciality) =>
                                setRegisterInfo({ ...registerInfo, speciality: speciality })
                            }
                        />
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Centro'
                            style={styles.input}
                            value={center}
                            onChangeText={(center) =>
                                setRegisterInfo({ ...registerInfo, center: center })
                            }
                        />
                    </View>

                )
            }


            <View style={styles.buttonContainer} >
                <SubmitButton text='GUARDAR' />
            </View>
            <Button title='Irrr' onPress={() => navigation.navigate('FifthPersonalScreen')} />

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
export default FourthPersonalScreen
