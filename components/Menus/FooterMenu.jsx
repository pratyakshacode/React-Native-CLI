import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
const FooterMenu = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (

    <View style={styles.container}>
    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <FontAwesome5 name="plus-square" size={20} style={styles.icon} color={route.name === 'Home' && 'white'}/>
      <Text style={styles.menu}>Home</Text>
    </TouchableOpacity >
    <TouchableOpacity onPress={()=> navigation.navigate('Post')}>
    <FontAwesome5 name="plus-square" size={20} style={styles.icon} color={route.name === 'Post' && 'white'}/>

      <Text style={styles.menu}>Post</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('About')}>
    <FontAwesome5 name="plus-square" size={20} style={styles.icon} color={route.name === 'About' && 'white'}/>

      <Text style={styles.menu}>My Post</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('Account')}>
    <FontAwesome5 name="plus-square" size={20} style={styles.icon} color={route.name === 'Account' && 'white'}/>

      <Text style={styles.menu}>Account</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#148',
        padding: 10,
        width: "100%",
    },
    icon: {
        marginBottom: 3,
        alignSelf: 'center',
    },
    menu : {
        color: '#fff',
    }
})

export default FooterMenu
