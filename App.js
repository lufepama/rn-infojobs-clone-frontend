import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GeneralNavigator from './GeneralNavigator';
import { UserInformationProvider } from './Context/UserInformationContext';

export default () => {
  return (
    <UserInformationProvider>
      <GeneralNavigator />
    </UserInformationProvider>
  );
}
