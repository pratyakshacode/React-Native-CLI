import React from 'react';
import { AuthProvider } from './context/authContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/auth/Register';
import Home from './screens/auth/Home';
import Login from './screens/auth/Login';
import ScreenMenu from './components/Menus/ScreenMenu';
import { PostProvider } from './context/postContext';

const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
      <ScreenMenu/>
      </PostProvider>
    </AuthProvider>
  );
};

export default RootNavigation;
