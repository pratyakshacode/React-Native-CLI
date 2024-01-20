import { useRoute } from '@react-navigation/native';
import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const PostDetails = () => {
  const {params} = useRoute();
  const {title, description, postedBy, date} = params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.details}>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{postedBy?.name}</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  heading : {
    fontSize: 30,
    color: 'black',
  },
  details:{
    borderWidth: 2,
    padding: 10,
    margin: 20,
    width: '80%',
    height: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#fff'

  }
})
export default PostDetails
