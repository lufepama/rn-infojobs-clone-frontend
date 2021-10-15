import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import { API } from '../backend'
import Icon from 'react-native-vector-icons/FontAwesome'

const OfferCard = ({ offer }) => {


    useEffect(() => {
        console.log('card')
    }, [])

    return (
        <View style={styles.root} >
            <View style={styles.mainContainer} >
                <View style={styles.imageContainer} >
                    <Image
                        style={styles.image}
                        source={{ uri: `${API}${offer.imagen}` }}
                    />
                </View>
                <View style={styles.contentBody} >
                    <View style={styles.titleContainer} >
                        <View style={styles.upperTitle} >
                            <Text style={styles.mainTitle} >{offer.titleOffer}</Text>
                            <Icon
                                style={styles.icon}
                                name='bookmark'
                                solid-={true}
                                size={20}
                            />
                        </View>
                        <Text>{offer.companyInfo.name}</Text>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.timeLocationContainer}>
                            <View style={styles.timeContainer} >
                                <Icon
                                    name='clock-o'
                                    size={18}
                                    style={styles.clockIcon}
                                />
                                <Text>Hace 2 horas</Text>
                            </View>
                            <View style={styles.locationContainer} >
                                <Icon
                                    name='map-marker'
                                    size={18}
                                    style={styles.clockIcon}
                                />
                                <Text>Hace 2 horas</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.salaryContainer} >
                        <Icon
                            name='dollar'
                            style={styles.dollarIcon}
                        />
                        <Text>{offer.lowerSalary}€ - {offer.upperSalary}€ Bruto/año </Text>
                    </View>

                    <Divider />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 120,
        marginTop: 30
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 120,
    },
    imageContainer: {
        flex: 1
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    contentBody: {
        flex: 1.9,
        paddingTop: 10,
    },
    titleContainer: {
        flexDirection: "column",
        flex: 2
    },
    upperTitle: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: 20,
    },
    dollarIcon: {
        marginTop: 4,
        marginRight: 8
    },
    mainTitle: {
        fontSize: 15
    },
    lowerContainer: {
        flex: 1
    },
    timeLocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    timeContainer: {
        flexDirection: 'row'
    },
    clockIcon: {

    },
    locationContainer: {
        flexDirection: 'row'
    },
    salaryContainer: {
        flexDirection: 'row',
        flex: 1
    }
})

export default OfferCard
