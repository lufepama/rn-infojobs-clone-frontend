import React, { useState, useCallback, useContext } from 'react'
import { View, StyleSheet, Dimensions, Button } from 'react-native'
import { Text, CheckBox, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SubmitButton from '../components/SubmitButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckGroup from '../components/CheckGroup'
import { useFocusEffect } from '@react-navigation/core'
import UserRegistrationContext from '../Context/UserRegistrationContext'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FourthPersonalScreen = ({ navigation }) => {

    const { registerInformation, setRegisterInformation } = useContext(UserRegistrationContext)
    const [showInitialDate, setShowInitialDate] = useState(false)
    const [mode, setMode] = useState('date');
    const [registerInfo, setRegisterInfo] = useState({
        has_studies: false,
        studies_qualification: 'medicina',
        studies_speciality: 'cirujia',
        studies_center: 'upm',
    })

    const { has_studies, studies_qualification, studies_speciality, studies_center } = registerInfo
    const handleHasStudies = () => {
        setRegisterInfo({ ...registerInfo, has_studies: !has_studies })
    }

    const handleSubmit = () => {
        setRegisterInformation({
            ...registerInformation,
            has_studies: has_studies,
            studies_qualification: studies_qualification,
            studies_speciality: studies_speciality,
            studies_center: studies_center
        })
        navigation.navigate('FifthPersonalScreen')
    }

    return (
        <View style={styles.root} >
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
                <CheckGroup groupTitle='Que estudios tienes?' titleFirstOption='Especificar estudios'
                    titleSecondOption='No tengo estudios' boolValue={has_studies} onPress={handleHasStudies} />
            </View>
            {
                has_studies && (
                    <View style={styles.historialContainer}>
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Titulo'
                            style={styles.input}
                            value={studies_qualification}
                            onChangeText={(title) =>
                                setRegisterInfo({ ...registerInfo, studies_qualification: title })
                            }
                        />
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Especialidad'
                            style={styles.input}
                            value={studies_speciality}
                            onChangeText={(speciality) =>
                                setRegisterInfo({ ...registerInfo, studies_speciality: speciality })
                            }
                        />
                        <Input
                            inputContainerStyle={{ borderBottomColor: '#167db7', borderBottomWidth: 2 }}
                            placeholderTextColor='grey'
                            placeholder='Centro'
                            style={styles.input}
                            value={studies_center}
                            onChangeText={(center) =>
                                setRegisterInfo({ ...registerInfo, studies_center: center })
                            }
                        />
                    </View>

                )
            }
            <View style={styles.buttonContainer} >
                <SubmitButton text='GUARDAR' onPress={handleSubmit} />
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
