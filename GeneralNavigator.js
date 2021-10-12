import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthFlow from './Screens/AuthFlow';

const StackNavigator = createNativeStackNavigator()


const GeneralNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator  >
                <StackNavigator.Screen name='AuthFlow' component={AuthFlow} options={{ headerShown: false }} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default GeneralNavigator
