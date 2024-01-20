import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
const Button = ({title, handleSubmit, loading}) => {
  return (
    <>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                
                  <Text style={styles.title}> { loading ? <ActivityIndicator color={'white'}/> : title}</Text>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1e151e',
        width: '80%',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    title : {
        color: '#fff',
        fontSize: 17,
    }
})

export default Button
