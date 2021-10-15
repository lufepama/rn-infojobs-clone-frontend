import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useOffers } from '../Hooks/useOffers'
import OfferCard from './OfferCard'

const OfferList = () => {

    const { offerList } = useOffers();

    useEffect(() => {
        console.log('lista')
    }, [])

    return (
        <View style={styles.root} >
            <FlatList
                nestedScrollEnabled={true}
                data={offerList}
                numColumns={1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <OfferCard key={item.id.toString()} offer={item} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
    }
})

export default OfferList
