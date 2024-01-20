import React, {useContext} from 'react';
import Register from '../../screens/auth/Register';
import Home from '../../screens/auth/Home';
import Login from '../../screens/auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../../context/authContext';
import HeaderMenu from './HeaderMenu';
import About from '../../screens/auth/About';
import Post from '../../screens/Post';
import Account from '../../screens/Account';
import PostDetails from '../../screens/PostDetails';

const ScreenMenu = () => {
  const [state] = useContext(AuthContext);
  const Stack = createNativeStackNavigator();
  const authenticatedUser = state?.user && state?.token;

  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticatedUser ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'React Native App',
            headerRight: () => <HeaderMenu />,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              gestureDirection: 'horizontal'
            }}
          />
        </>
      )}

      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          gestureDirection: 'vertical-inverted'
        }}
      />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenMenu;
