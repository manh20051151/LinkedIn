import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import Posts from '../Data/Posts';
import Screens from '../Utils/Screens';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Post() {
  const list = [
    {title: 'Add a photo', icon: 'photo'},
    {title: 'Take a video', icon: 'video-camera'},
    {title: 'Celebrate an occasion', icon: 'sun-o'},
    {title: 'Add a document', icon: 'newspaper-o'},
    {title: "Share that you're hiring", icon: 'briefcase'},
    {title: 'Find an expert', icon: 'angellist'},
    {title: 'Create apoll', icon: 'bar-chart'},
    {title: 'Create an event', icon: 'calendar'},
  ];

  const [showFlatList, setShowFlatList] = useState(true);
  const [inputText, setInputText] = useState('');
  const [savedPosts, setSavedPosts] = useState([]);
  const nextId = Posts.length + 1;
  const navigation = useNavigation();

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('savedPosts');
        if (savedData !== null) {
          setSavedPosts(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('savedPosts', JSON.stringify(Posts));
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    saveData();
  }, [Posts]);

  const ListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {}}
      style={[
        {
          flexDirection: 'row',
          display: 'flex',
          marginVertical: 7,
          alignItems: 'center',
        },
      ]}>
      <Icon
        name={item.icon}
        size={25}
        color={Colors.GRAY}
        style={{ marginHorizontal: 20 }}
      />
      <Text style={{ color: Colors.GRAY, fontWeight: 'bold', fontSize: 16 }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  const generateNextId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  const addNewPost = async () => {
    if (!inputText.trim()) {
      alert('Bạn chưa nhập gì !!');
      return;
    }
  
    try {
      // Lấy dữ liệu từ AsyncStorage
      const savedPosts = await AsyncStorage.getItem('posts');
      let updatedPosts = [];
  
      // Kiểm tra xem AsyncStorage có dữ liệu hay không
      if (savedPosts !== null) {
        updatedPosts = JSON.parse(savedPosts);
      }
      // Lấy nextId từ AsyncStorage hoặc Posts nếu AsyncStorage trống
      //const nextId = savedPosts !== null ? updatedPosts.length + 1 : Posts.length + 1;
  
      const newPost = {
        id: generateNextId(),
        profile_picture: Images.PROFILE_PICTURE,
        name: 'Nguyễn Viết Mạnh',
        title: 'You',
        timeAgo: 0,
        content: inputText,
        hasImage: false,
        shares: 0,
        comments: 0,
        likes: 0,
        isLiked: false,
        xoa: 'a',
      };
  
      // Thêm bài đăng mới vào danh sách
      updatedPosts.push(newPost);
  
      // Lưu danh sách mới vào AsyncStorage
      await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));
  
      setInputText('');
      navigation.navigate(Screens.HOME_STACK);
    } catch (error) {
      console.error('Error saving new post to AsyncStorage:', error);
    }
  };

  const toggleFlatList = () => {
    setShowFlatList(!showFlatList);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <View style={{ marginTop: 20, paddingHorizontal: 20, height: 250, flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={Images.PROFILE_PICTURE}
            style={{ height: 46, width: 46, borderRadius: 100 }}
          />
          <TouchableOpacity onPress={addNewPost}>
            <Text
              style={{
                color: Colors.GRAY,
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 270,
              }}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          value={inputText}
          placeholder="What do you want to talk about?"
          onChangeText={(text) => setInputText(text)}
          onFocus={toggleFlatList}
          onBlur={toggleFlatList}
          style={{ fontSize: 19, color: Colors.GRAY, paddingTop: 10 }}
        />
      </View>
      {showFlatList && (
        <View
          style={{
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
            elevation: 1,
            paddingVertical: 20,
          }}>
          <FlatList
            data={list}
            renderItem={ListItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}
