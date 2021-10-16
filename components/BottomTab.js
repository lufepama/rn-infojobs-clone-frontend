import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import BottomElementTab from './BottomElementTab'

const BottomTab = () => {

    return (
        <View style={styles.root}>
            <View style={styles.mainContainer} >
                <BottomElementTab text='Buscador' icon='search' screenToNavigate='FavouriteOffersScreen' />
                <BottomElementTab text='Mis ofertas' icon='briefcase' screenToNavigate='FavouriteOffersScreen' />
                <BottomElementTab text='CV' icon='user' screenToNavigate='FavouriteOffersScreen' />
                <BottomElementTab text='Novedades' icon='bell' isNotification={true} screenToNavigate='FavouriteOffersScreen' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
})

export default BottomTab
