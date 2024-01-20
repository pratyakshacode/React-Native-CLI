import React, {useContext} from 'react'
import { AuthContext } from '../../context/authContext'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import FooterMenu from '../../components/Menus/FooterMenu';
import { PostContext } from '../../context/postContext';
import Card from '../Card';

const Home = () => {

  const[state]= useContext(AuthContext);
  const {user} = state;
  const [posts] = useContext(PostContext);
  return (
    <>
    <View style={styles.container}>

      <FlatList style={styles.list} data={posts} renderItem={(post)=> {
        return <Card title={post.item.title} description = {post.item.description} postedBy={post.item.postedBy} createdAt={post.item.createdAt}/>
      }}/>
      </View>
        <FooterMenu/>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  list: {
    width: '100%',
    
  }
})
export default Home
