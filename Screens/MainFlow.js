import React from 'react';
import HomeScreen from './HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OffersProvider } from '../Context/OffersContext';
import FavouriteOffersScreen from './FavouriteOffersScreen';

const MainFlowStack = createNativeStackNavigator()

const MainFlow = () => {

    return (
        <OffersProvider>
            <MainFlowStack.Navigator>
                <MainFlowStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name="FavouriteOffersScreen" component={FavouriteOffersScreen} options={{ headerShown: false }} />
            </MainFlowStack.Navigator>
        </OffersProvider>
    )
}

export default MainFlow;