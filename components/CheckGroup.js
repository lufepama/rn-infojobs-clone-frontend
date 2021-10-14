import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, CheckBox } from 'react-native-elements'

const CheckGroup = ({ groupTitle, titleFirstOption, titleSecondOption, boolValue, onPress }) => {

    return (
        <View style={styles.root} >
            <Text>{groupTitle}</Text>
            <CheckBox
                containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                title={titleFirstOption}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={boolValue}
                onPress={onPress}
            />
            <CheckBox
                containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                title={titleSecondOption}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={!boolValue}
                onPress={onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    }
})

export default CheckGroup
