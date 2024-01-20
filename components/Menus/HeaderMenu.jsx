import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderMenu = () => {

    const [state, setState] = useContext(AuthContext);

    const handleLogout = async ()=> {
        setState({token:'', user: ''})
        await AsyncStorage.removeItem('@auth');
        alert("Logged out successfully");
    }
  return (
    <TouchableOpacity onPress={()=> handleLogout()} style={styles.button}>
    <Text style={styles.text}>Logout</Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#912432',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default HeaderMenu
