import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, CheckBox } from 'react-native-elements'

const CheckGroup = ({ groupTitle, titleFirstOption, titleSecondOption }) => {
    return (
        <View style={styles.root} >
            <Text>{groupTitle}</Text>
            <CheckBox
                containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                title={titleFirstOption}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={ }
                onPress={() => setRegisterInfo({ ...registerInfo, spanish: true, foreign: false })}
            />
            <CheckBox
                containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                title={titleSecondOption}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={foreign}
                onPress={() => setRegisterInfo({ ...registerInfo, spanish: false, foreign: true })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    }
})

export default CheckGroup
