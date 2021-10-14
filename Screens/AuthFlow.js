import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import FirstPersonalScreen from '../Screens/FirstPersonalScreen'
import SecondPersonalScreen from '../Screens/SecondPersonalScreen'
import ThirdPersonalScreen from '../Screens/ThirdPersonalScreen'
import FourthPersonalScreen from '../Screens/FourthPersonalScreen'
import FifthPersonalScreen from '../Screens/FifthPersonalScreen'
import { UserRegistrationProvider } from '../Context/UserRegistrationContext'

const AuthStack = createNativeStackNavigator()


const AuthFlow = () => {
    return (
        <UserRegistrationProvider>
            <AuthStack.Navigator>
                <AuthStack.Screen name='SigninScreen' component={SigninScreen} options={{ headerShown: false }} />
                <AuthStack.Screen name='FirstPersonalScreen' component={FirstPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
                <AuthStack.Screen name='SecondPersonalScreen' component={SecondPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
                <AuthStack.Screen name='ThirdPersonalScreen' component={ThirdPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
                <AuthStack.Screen name='FourthPersonalScreen' component={FourthPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
                <AuthStack.Screen name='FifthPersonalScreen' component={FifthPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
            </AuthStack.Navigator>
        </UserRegistrationProvider>
    )
}

export default AuthFlow
