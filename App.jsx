import React from 'react';
import { View, Text } from 'react-native';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/authContext';
import Home from './screens/auth/Home';
import RootNavigation from './RootNavigation';

const App = () => {  
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
};

export default App;
