import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { AuthContext } from '../context/authContext';
import FooterMenu from '../components/Menus/FooterMenu';
import InputField from '../components/InputField';
import Button from '../components/Button';
import axios from 'axios';
const Account = () => {

    const [state, setState] = useContext(AuthContext);

    const {user} = state;

    const [email, setEmail] = useState(user?.email);
    const [password, setPassword] = useState(user?.password);
    const [name, setName] = useState(user?.name);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async ()=> {
      try {
        
        setLoading(true)
        const {data} = await axios.put('/user/update', {name, email, password});
        setState({...state, user: data?.user})
        Alert.alert(data && data.msg);
        setLoading(false);

      } catch (error) {
        Alert.alert(error.response.data.msg);
        setLoading(false)
      }
    }

  return (

    <>
    <View style={styles.container}>
      <Text>User Account</Text>
      <InputField label = "Name" value={name} setValue={setName}/>
      <InputField label = "Email" value={email} editable={false} setValue={setEmail}/>
      <InputField label = "Password" value={password} setValue={setPassword}/>
      <Button title="Update" handleSubmit={handleSubmit} loading = {loading}/>
    </View>
      <FooterMenu/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Account
