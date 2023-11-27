import { View, Text, FlatList,Alert  } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShowPosts from '../Components/ShowPosts';
import PostsData from '../Data/Posts';
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const retrieveData = async () => {
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      if (storedPosts !== null) {
        setPosts(JSON.parse(storedPosts));
      } else {
        setPosts(PostsData);
        saveData(PostsData);
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('posts', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const handleLike = (postId) => {
    // Tìm bài đăng cần cập nhật trong state
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedPost = {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        };
        return updatedPost;
      }
      return post;
    });

    setPosts(updatedPosts); // Cập nhật state

    // Lưu dữ liệu vào AsyncStorage
    saveData(updatedPosts)
      .then(() => console.log('Data saved successfully after like operation'))
      .catch((error) =>
        console.error('Error saving data after like operation:', error)
      );
  };



  useFocusEffect(React.useCallback(() => {
    retrieveData();
  }, []));
  
  
  useFocusEffect(React.useCallback(() => {
    retrieveData();
  }, []));

  
// Hàm để xóa dữ liệu từ AsyncStorage
const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem('posts'); // Xóa dữ liệu có key là 'posts'
    console.log('AsyncStorage cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

  // Hàm xác nhận xóa bài đăng
  const confirmDelete = async (item) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn xóa bài viết này?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa',
          onPress: async () => {
            try {
              const updatedPosts = posts.filter((post) => post.id !== item.id);

              setPosts(updatedPosts); // Cập nhật state

              // Lưu dữ liệu vào AsyncStorage sau khi xóa
              await saveData(updatedPosts);
              console.log('Data saved successfully after delete operation');
            } catch (error) {
              console.error('Error deleting post:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };
  

//xóa dữ liệu
// clearAsyncStorage();
  return (
    <View>
      <FlatList
      //  data={[...posts].reverse()}
        // inverted
        data={[...posts].reverse()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ShowPosts key={item.id} item={item} handleLike={handleLike} confirmDelete={() => confirmDelete(item)} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
