import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import {useState} from 'react';
import axios from 'axios';

const Register = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async ()=> {
        try{
            setLoading(true)
            
            const {data} = await axios.post('/auth/register', {name, email, password});
            console.log(data)
            Alert.alert(data && data.msg);
            setLoading(false)
            navigation.navigate("Login")
            
        } catch(err) {
            setLoading(false)
            Alert.alert(err.response.data.msg);
            console.log(err.response.data.msg);
        }
    }

    return (
        <View style={styles.container}>
          <Text style={styles.header}> Register </Text>
            <InputField label="Name" value={name} setValue={setName} />
            <InputField label="Email" keyboardType={"email-address"} autoComplete={"email"} value={email} setValue={setEmail}/>
            <InputField label="Password" secureTextEntry={true} autoComplete={"password"} value={password} setValue={setPassword}/>
            <Button title="Register" loading={loading} handleSubmit={handleSubmit}/>
            <View style={styles.footer}>
            <Text style={styles.text}>Already registered ?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={styles.loginText}>Login Here</Text></TouchableOpacity>
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
        margin: 10,
        color: 'black'
    },
    text: {
        color: 'black'
    }

})

export default Register