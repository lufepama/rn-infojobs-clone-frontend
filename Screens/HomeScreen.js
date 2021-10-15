import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import { deleteToken } from '../Helper'
import { useUserInfo } from '../Hooks/useUserInfo'
import SearchBar from '../components/SearchBar'
import { useFocusEffect } from '@react-navigation/core'
import { useOffers } from '../Hooks/useOffers'
import OfferList from '../components/OfferList'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const HomeScreen = () => {

    const { setIsUserLogged, userInfo, setUserInfo } = useUserInfo()
    const { offerList, setOfferList } = useOffers()

    const onDeleteToken = async () => {
        const response = await deleteToken()
        if (response) {
            setIsUserLogged(false)
        }
    }

    useFocusEffect(
        useCallback(() => {
        }, [])
    )

    return (
        <View style={styles.root}>
            <Image
                style={styles.backgroundImage}
                source={require('../images/homeImagen.png')}
            />
            <View style={styles.searchBarContainer} >
                <SearchBar />
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.offersNumberContainer} >
                    <Text style={styles.offersText} >20 OFERTAS EN MADRID</Text>
                </View>
                <Divider />
                <View style={styles.resultsContainer} >
                    <OfferList />
                </View>
                <Divider />
            </View>
            <TouchableOpacity style={{ backgroundColor: 'red', width: 40, height: 40 }} onPress={onDeleteToken} >
                <Text h6>Volver</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: windowHeight,
        width: windowWidth,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginTop: 20
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: 20,
        left: windowWidth / 18
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    offersNumberContainer: {
        flex: 0.3,
        justifyContent: 'center',
        paddingLeft: 20
    },
    offersText: {
        fontSize: 18,
        fontWeight: 'bold'

    },
    resultsContainer: {
        flex: 2
    }
})

export default HomeScreen
