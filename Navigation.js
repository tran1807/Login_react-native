import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logins from './src/Views/Login';
import Registers from './src/Views/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Logins} />
      <Stack.Screen name="Register" component={Registers} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation
