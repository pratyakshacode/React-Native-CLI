import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [state, setState] = useState({
    user: '',
    token: '',
  });

  axios.defaults.baseURL = 'https://reactnativeproduction.onrender.com/api';
  axios.defaults.headers.common['Authorization'] = `Bearer ${state?.token}`;

  const loadLocalStorageData = async () => {
    let data = await AsyncStorage.getItem('@auth');
    let loginData = JSON.parse(data);

    setState({...state, user: loginData?.user, token: loginData?.token});
  };

  useEffect(() => {
    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
