import React, { useContext, useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FooterMenu from '../components/Menus/FooterMenu';
import InputField from '../components/InputField';
import Button from '../components/Button';
import axios from 'axios';
import { PostContext } from '../context/postContext';

const Post = () => {

  const [posts, setPosts] = useContext(PostContext);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');

  const handleSubmit = async ()=> {
    try {
      const {data} = await axios.post('/user/create-post', {title, description});
      alert(data && data.msg);
      setTitle(''); setDescription('');
      setPosts([...posts, data.post]);
      
    } catch (error) {
      alert(error.response.data.msg);
    }

  }
  return (
    <>
      <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', marginTop: 20}}>Post Something</Text>

      <InputField placeholder={"Enter Post Title"} value={title} setValue={setTitle}/>
      <InputField placeholder={"Enter Post Description"} multiline={true} numberOfLines={6} value={description} setValue={setDescription}/>
      <Button title={"Post"} handleSubmit={handleSubmit}/>
    </View>
      </ScrollView>
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
  
export default Post
