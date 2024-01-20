import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import {useState, useContext} from 'react'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const [state, setState] = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async ()=> {
        try{
            setLoading(true)
            if(!email || !password) {
                Alert.alert('Please add all the fields')
                setLoading(false)
                return;
            }
            
            
            const response = await axios.post('/auth/login', {email, password});
            const data = await response.data;

            await AsyncStorage.setItem('@auth', JSON.stringify(data));
            Alert.alert(data && data.msg);
            setState(data);
            setLoading(false)

            navigation.navigate("Home")

        } catch(err) {
            setLoading(false)
            Alert.alert(err.response.data.msg);
            console.log(err.response.data.msg)
        }
    }


    const getData = async ()=> {
        try {
            const value = await AsyncStorage.getItem('@auth')
            if(value !== null) {
                console.log("Localstorage:", value)
            }
            console.log("Localstorage:", value);
        } catch(e) {
            console.log(e)
        }
    }
    
    // getData();
    return (
        <View style={styles.container}>
          <Text style={styles.header}> Login Here </Text>
            <InputField label="Email" keyboardType={"email-address"} autoComplete={"email"} value={email} setValue={setEmail}/>
            <InputField label="Password" secureTextEntry={true} autoComplete={"password"} value={password} setValue={setPassword}/>
            <Button title="Login" loading={loading} handleSubmit={handleSubmit}/>
            <View style={styles.footer}>
            <Text style={styles.text}>Don't Have An Account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Register")}><Text style={styles.loginText}>Create Account Here</Text></TouchableOpacity>
            </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    header: {
        fontSize: 30,
        color: '#1e151e',
    },
    footer : {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        textDecorationLine: 'underline',
        fontSize: 14,
        color: 'black',
        margin: 10
    },
    text: {
        color: 'black'
    }

})

export default Login