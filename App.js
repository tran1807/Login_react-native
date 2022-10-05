import { View, Text } from 'react-native';
import React from 'react';
import Navigations from './Navigation'
import { AuthProvider } from './src/Contect/AuthContext';

const App = () => {
  return (
    <AuthProvider>
       <Navigations/>
       </AuthProvider>
    
  )
}

export default App;