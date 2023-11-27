import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import * as ProfileData from '../Data/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Chat() {
  const route = useRoute();
  const DATA = ProfileData.default;
  const senderName = DATA.INFO.name;
  const {recipientName, recipientImage, title, baner} = route.params;
  //const recipientKey = `chatMessages_${recipientName}_${senderName}`;
  const userImage = recipientImage; // Thay đổi thành hình ảnh của người dùng
  const senderImage = DATA.INFO.profile_picture; // Thay đổi thành hình ảnh của người gửi
  const navigation = useNavigation();
  const [recipientKey, setRecipientKey] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello!',
      sender: 'other',
      time: new Date().toLocaleTimeString(),
    },
    {
      id: '2',
      text: 'Hi there!',
      sender: 'user',
      time: new Date().toLocaleTimeString(),
    },

    // Add more mock messages here...
  ]);
  const [inputText, setInputText] = useState('');

  const scrollViewRef = useRef(null);

  const clearChatData = async () => {
    try {
      await AsyncStorage.removeItem(recipientKey);
      console.log('Đã xóa dữ liệu chat thành công!');
    } catch (error) {
      console.error('Lỗi khi xóa dữ liệu chat:', error);
    }
  };

  //xóa dữ liệu
  // clearChatData();
  const sendMessage = async () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: String(messages.length + 1),
        text: inputText,
        sender: 'user',
        time: new Date().toLocaleTimeString(),
      };

      try {
        const savedMessages = [...messages, newMessage];
        await AsyncStorage.setItem(recipientKey, JSON.stringify(savedMessages));
        setMessages(savedMessages);
        setInputText('');
      } catch (error) {
        console.error('Error saving message:', error);
      }
    }
  };

  // useEffect(() => {
  //   const getSavedMessages = async () => {
  //     try {
  //       const savedMessages = await AsyncStorage.getItem(recipientKey);
  //       if (savedMessages !== null) {
  //         setMessages(JSON.parse(savedMessages));
  //       }
  //     } catch (error) {
  //       console.error('Error retrieving messages:', error);
  //     }
  //   };

  //   getSavedMessages();
  // }, [recipientKey]);

  // useEffect(() => {
  //   scrollViewRef.current.scrollToEnd({animated: true});
  // }, [messages]);

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     loadMessages();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  // const loadMessages = async () => {
  //   try {
  //     const savedMessages = await AsyncStorage.getItem(recipientKey);
  //     if (savedMessages !== null) {
  //       setMessages(JSON.parse(savedMessages));
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving messages:', error);
  //   }
  // };

  // useEffect(() => {
  //   loadMessages();
  // }, [recipientKey]);

  useEffect(() => {
    setRecipientKey(`chatMessages_${recipientName}_${senderName}`);
  }, [recipientName, senderName]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const savedMessages = await AsyncStorage.getItem(recipientKey);
        if (savedMessages !== null) {
          setMessages(JSON.parse(savedMessages));
        }
      } catch (error) {
        console.error('Error retrieving messages:', error);
      }
    };

    loadMessages();
  }, [recipientKey]);

  const navigateToUser = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('User', {recipientName, recipientImage, title, baner});
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#E0E0E0',
          paddingVertical: 8,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back"
              style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigateToUser(recipientName, recipientImage, title, baner)
            }>
            <Image
              source={recipientImage}
              style={{height: 50, width: 50, borderRadius: 100}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigateToUser(recipientName, recipientImage, title, baner)
            }>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {recipientName}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Icon
              name="call"
              size={25}
              style={{marginRight: 10, color: '#0866ff'}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon1 name="video" size={25} style={{color: '#0866ff'}} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        style={{flex: 1}}
        contentContainerStyle={{padding: 10}}>
        {messages.map((item, index) => (
          <View
            key={index}
            style={
              item.sender === 'user'
                ? styles.userMessageContainer
                : styles.otherMessageContainer
            }>
            {item.sender === 'user' ? (
              <View style={{flexDirection: 'row'}}>
                <View style={styles.messageContent}>
                  <Text style={styles.userMessageText}>{item.text}</Text>
                  <Text style={styles.messageTime}>{item.time}</Text>
                </View>
                <Image source={senderImage} style={styles.senderImage} />
              </View>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Image source={userImage} style={styles.userImage} />
                <View style={styles.messageContent}>
                  <Text style={styles.otherMessageText}>{item.text}</Text>
                  <Text style={styles.messageTime}>{item.time}</Text>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <TouchableOpacity>
          <Icon
            name="add-circle"
            style={{fontSize: 28, marginRight: 10, color: '#0866ff'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon2
            name="camera"
            style={{fontSize: 24, marginRight: 10, color: '#0866ff'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon2
            name="picture-o"
            style={{fontSize: 24, marginRight: 10, color: '#0866ff'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon2
            name="microphone"
            style={{fontSize: 24, marginRight: 10, color: '#0866ff'}}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Type a message..."
          value={inputText}
          onChangeText={text => setInputText(text)}
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1.5,
            borderColor: '#E0E0E0',
            borderRadius: 20,
            paddingHorizontal: 15,
            marginRight: 10,
            borderColor: '#0866ff',
          }}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: '#0084FF',
          }}>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  otherMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  senderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  messageContent: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#DCF8C6',
  },
  userMessageText: {
    fontSize: 16,
  },
  otherMessageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#888888',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
