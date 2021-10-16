import React from 'react'
import { View, StyleSheet, Touchabl, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const Tabs = ({ isFirstActive, onPress }) => {

    return (
        <View style={styles.root} >
            <View style={styles.mainContainer} >
                <TouchableOpacity style={styles.touchableContainer} onPress={onPress} disabled={isFirstActive ? true : false}  >
                    <View style={{
                        height: '100%',
                        borderBottomWidth: isFirstActive ? 2 : null,
                        borderBottomColor: '#167db7',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.bottonText} >CANDIDATURAS</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableContainer} onPress={onPress} disabled={isFirstActive ? false : true} >
                    <View style={{
                        height: '100%',
                        borderBottomWidth: isFirstActive ? null : 2,
                        borderBottomColor: '#167db7',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                        <Text style={styles.bottonText} >GUARDADAS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
    },
    mainContainer: {
        flexDirection: 'row',
        height: 70,
    },
    touchableContainer: {
        height: '100%',
        flex: 1,
    },
    buttonInnerContainer: {
        height: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#167db7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottonText: {
        fontWeight: 'bold',
        color: '#167db7'
    }
})

export default Tabs
