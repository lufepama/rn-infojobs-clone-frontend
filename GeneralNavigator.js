import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthFlow from './Screens/AuthFlow';
import { useUserInfo } from './Hooks/useUserInfo';
import { getCredentials } from './Helper';
import MainFlow from './Screens/MainFlow';

const StackNavigator = createNativeStackNavigator()


const GeneralNavigator = () => {

    const { isUserLogged, setIsUserLogged } = useUserInfo();

    const getUserCredentials = async () => {
        const user = await getCredentials()
        console.log(user)
        if (user) {
            setIsUserLogged(true)
        }
        console.log(user)
    }

    useEffect(() => {
        getUserCredentials()
    }, [isUserLogged])

    return (
        <NavigationContainer>
            <StackNavigator.Navigator  >
                {
                    isUserLogged
                        ? <StackNavigator.Screen name='MainFlow' component={MainFlow} options={{ headerShown: false }} />
                        : <StackNavigator.Screen name='AuthFlow' component={AuthFlow} options={{ headerShown: false }} />

                }
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default GeneralNavigator
