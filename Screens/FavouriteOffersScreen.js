import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BottomTab from '../components/BottomTab'
import { Tab, TabView } from 'react-native-elements'
import Tabs from '../components/Tabs'
import SimpleHeader from '../components/SimpleHeader'
import CandidatureView from '../components/CandidatureView'
import OfferSavedView from '../components/OfferSavedView'

const FavouriteOffersScreen = ({ navigation }) => {

    const [isFirstActive, setIsFirstActive] = useState(true)

    const onChangeActive = () => {
        setIsFirstActive(!isFirstActive)
    }

    return (
        <View style={styles.root} >
            <View style={styles.header} >
                <SimpleHeader title='Mis ofertas' />
            </View>
            <View style={styles.mainContainer} >
                <View style={styles.tabViewContainer} >
                    <Tabs isFirstActive={isFirstActive} onPress={onChangeActive} />
                </View>
                <View style={styles.tabContentContainer} >
                    {
                        isFirstActive
                            ? <CandidatureView />
                            : <OfferSavedView />
                    }
                </View>
                <BottomTab />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        flex: 1,
    },
    header: {
        flex: 0.5
    },
    mainContainer: {
        flex: 4,
        justifyContent: 'space-between',
    },
    tabViewContainer: {
        flex: 0.5
    },
    tabContentContainer: {
        flex: 3,
    }
})

export default FavouriteOffersScreen
