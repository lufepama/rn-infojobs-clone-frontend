import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPersonalScreen from '../Screens/FirstPersonalScreen'
import SecondPersonalScreen from '../Screens/SecondPersonalScreen'
import ThirdPersonalScreen from '../Screens/ThirdPersonalScreen'
import FourthPersonalScreen from '../Screens/FourthPersonalScreen'
import FifthPersonalScreen from '../Screens/FifthPersonalScreen'

const SignupStack = createNativeStackNavigator()

const SignupFlow = () => {
    return (
        <SignupStack.Navigator>
            <SignupStack.Screen name='FirstPersonalScreen' component={FirstPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
            <SignupStack.Screen name='SecondPersonalScreen' component={SecondPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
            <SignupStack.Screen name='ThirdPersonalScreen' component={ThirdPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
            <SignupStack.Screen name='FourthPersonalScreen' component={FourthPersonalScreen} options={{ headerTitle: 'Datos personales' }} />
            <SignupStack.Screen name='FifthPersonalScreen' component={FifthPersonalScreen} options={{ headerBackTitle: 'Datos personales' }} />
        </SignupStack.Navigator>
    )
}

export default SignupFlow
