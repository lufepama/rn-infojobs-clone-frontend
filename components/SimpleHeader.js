import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const SimpleHeader = ({ title }) => {
    return (
        <View style={styles.root} >
            <View style={styles.mainContainer} >
                <Text style={styles.text}>{title}</Text>
                <Icon
                    name='ellipsis-v'
                    size={25}
                    style={styles.icon}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    mainContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    text: {
        fontWeight: '800',
        fontSize: 25
    },
    icon: {
        marginTop: 4,
        marginRight: 20
    }
})

export default SimpleHeader
