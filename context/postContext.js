import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const PostContext = createContext();

const PostProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get('/user/get-all-posts');
      setPosts(data?.allPosts);
      setLoading(false);
    } catch (error) {
      alert(error.response.data.msg);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={[posts, setPosts, getAllPosts]}>
      {children}
    </PostContext.Provider>
  );
};

export {PostContext, PostProvider};
