import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Card = ({title, description, postedBy, createdAt}) => {

    const date = createdAt?.slice(0, 10).split('-').reverse().join(':');
    const navigation = useNavigation();

  return (
    <View style={styles.cards}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line}></View>
      <Text style={styles.text}>{description}</Text>
        <View>
            <Text style={styles.text}>Posted By : {postedBy?.name}</Text>
            <Text style={styles.text}>Date : {date}</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('PostDetails', {title, description, postedBy, date})}><Text style={{color: 'black', padding: 5}}>View Post</Text></TouchableOpacity>
        </View>
    
      
    </View>
  )
}

const styles = StyleSheet.create({
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 200,
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#19f'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'white',
    },
    text: {
        color:'white'
    },
    line: {
        borderWidth: 2,
        borderColor: 'white',
        width: '100%',
        margin: 0
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'silver',
        margin: 2
    }
})
export default Card
