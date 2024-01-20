import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from './Button';
import axios from 'axios';

const UserCard = ({title, description, createdAt, id, setModalVisible, setEditPost, post}) => {

    const date = createdAt?.slice(0, 10).split('-').reverse().join(':');
    const [loading, setLoading] = useState(false);
    
    const deletePost = async ()=> {
        
        try{
            setLoading(true);
            const {data} = await axios.delete(`/user/delete-post/${id}`);
            alert(data.msg);
            setLoading(false);

    } catch(error) {
            alert(error.response.data.msg);
            setLoading(false);
        }
    }

  return (
    <View style={styles.cards}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line}></View>
      <Text style={styles.text}>{description}</Text>
        <View>
            <Text style={styles.text}>Date : {date}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> {setEditPost(post), setModalVisible(true)}}>
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deletePost}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        height: 200,
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#199'
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
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    button:{
        // backgroundColor: '#157',
        padding: 5,
        borderRadius: 7
    },
    buttonText: {
        textDecorationLine: 'underline'
    }
})
export default UserCard
