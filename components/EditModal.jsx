import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import InputField from './InputField';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const App = ({modalVisible, setModalVisible, post}) => {

    const navigation = useNavigation();

  const handleSubmit = async ()=> {
    
    try {
        const {data} = await axios.put(`/user/update-post/${post._id}`, {title, description});
        setModalVisible(false);
        Alert.alert(data.msg);
        navigation.push('About');
        
    } catch (error) {
        Alert.alert(error.response.data.msg);
        setModalVisible(false)
    }

  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  useEffect(()=> {
    setTitle(post?.title);
    setDescription(post?.description);
  },[post])

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Post</Text>
            <InputField value={title} setValue={setTitle}/>
            <InputField multiline={true} numberOfLines={6} value={description} setValue={setDescription}/>
            <TouchableOpacity onPress={handleSubmit} style={[styles.button, {backgroundColor: '#199'}]}><Text style={[styles.buttonText]}>Edit</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> setModalVisible(!setModalVisible)} style={[styles.button, {backgroundColor:'#919'}]}><Text style={styles.buttonText}>Close</Text></TouchableOpacity>
            {/* <Text>{JSON.stringify(post)}</Text> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 20,
    
  },
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
      
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
    , width: '80%',
    margin: 10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:"#569",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  }
});

export default App;