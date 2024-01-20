import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FooterMenu from '../../components/Menus/FooterMenu';
import { AuthContext } from '../../context/authContext'
import Card from '../Card';
import axios from 'axios';
import UserCard from '../../components/UserCard';
import EditModal from '../../components/EditModal';

const About = () => {

  const [state] = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [editPost, setEditPost] = useState({})
  const getUserPosts = async ()=> {
    try {
      
      const {data} = await axios.get('/user/get-user-post');
      setPosts(data.posts);
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  useEffect(()=> {
    getUserPosts();
  },[]);

  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <EditModal modalVisible={modalVisible} setModalVisible={setModalVisible} post={editPost} />
    <View style={styles.container}>
        {posts.length ? <FlatList data={posts} renderItem={(post)=> {
          return <UserCard title={post.item.title} description={post.item.description} createdAt={post.item.createdAt} id={post.item._id} modalVisiblility={modalVisible} setModalVisible={setModalVisible} setEditPost={setEditPost} post={post.item}/>
        }}/> :<><Text style={styles.msgHeading}>Oops!</Text><Text style={styles.msg}>"You don't have any posts yet. Create new Quickly"</Text></> }
    </View>
        <FooterMenu/>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize'
  },
  msg : {
    color:  '#199',
    fontSize: 20,
  },
  msgHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#569'
  }
});


export default About
