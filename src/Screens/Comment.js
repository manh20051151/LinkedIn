import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import {deviceWidth} from '../Components/Dimensions';
import Images from '../Utils/Images';
import * as ProfileData from '../Data/Profile';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../Utils/Colors';
import {useNavigation} from '@react-navigation/native';

export default function Comment({route}) {
  const navigation = useNavigation();
  const DATA = ProfileData.default;
  const {post, updateComments} = route.params;
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.commentsArray || []); // Sử dụng mảng comments từ post hoặc sử dụng mảng rỗng
  const [updatedPost, setUpdatedPost] = useState(post);
  const senderImage = DATA.INFO.profile_picture;
  const addComment = () => {
    // Tạo một comment mới
    const newComment = {
      id: comments.length + 1,
      text: commentText, // Đây là comment mới, bạn cần thay đổi theo dữ liệu người dùng nhập vào
      time: new Date().toLocaleTimeString(),
    };

    // Tăng số lượng comments và cập nhật danh sách comments
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    const updatedPostWithComments = {
      ...updatedPost,
      comments: updatedComments.length,
      commentsArray: updatedComments,
    };

    // Cập nhật số lượng comments và danh sách comments vào bài đăng
    updateComments(updatedPost.id, updatedComments);

    // Lưu lại dữ liệu mới vào AsyncStorage
    saveCommentsToAsyncStorage(updatedPost.id, updatedComments);
    setUpdatedPost(updatedPostWithComments);
    setCommentText('');
  };

  const saveCommentsToAsyncStorage = async (postId, updatedComments) => {
    try {
      // Lấy dữ liệu từ AsyncStorage
      const storedPosts = await AsyncStorage.getItem('posts');
      let posts = JSON.parse(storedPosts);

      // Tìm bài đăng cần cập nhật trong dữ liệu lấy từ AsyncStorage
      const updatedPosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: updatedComments.length,
            commentsArray: updatedComments,
          };
        }
        return post;
      });

      // Lưu lại dữ liệu đã cập nhật vào AsyncStorage
      await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));
    } catch (error) {
      console.error('Error saving comments to AsyncStorage:', error);
    }
  };

  const deleteComment = async (postId, commentId) => {
    try {
      Alert.alert(
        'Xác nhận',
        'Bạn có chắc chắn muốn xóa comment này?',
        [
          {text: 'Hủy', style: 'cancel'},
          {
            text: 'Xóa',
            onPress: async () => {
              const storedPosts = await AsyncStorage.getItem('posts');
              let posts = JSON.parse(storedPosts);

              const updatedPosts = posts.map(post => {
                if (post.id === postId) {
                  const updatedComments = post.commentsArray.filter(
                    comment => comment.id !== commentId,
                  );
                  return {
                    ...post,
                    comments: updatedComments.length,
                    commentsArray: updatedComments,
                  };
                }
                return post;
              });

              await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));

              // Load lại danh sách comments sau khi xóa
              const updatedPostWithComments = updatedPosts.find(
                post => post.id === postId,
              );
              setUpdatedPost(updatedPostWithComments);
              setComments(updatedPostWithComments.commentsArray || []);
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };
  const navigateToHome = () => {
    navigation.navigate('HOME');
  };
  const navigateToUser = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('User', {recipientName, recipientImage, title, baner});
  };
  const navigateToPostImage = rPostImage => {
    navigation.navigate('PostImage', {rPostImage});
  };
  return (
    <KeyboardAwareScrollView behavior="padding" enabled>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginVertical: 5,
          paddingVertical: 10,
        }}>
        <TouchableOpacity onPress={navigateToHome}>
          <Icon
            name="back"
            style={{
              fontSize: 30,
              position: 'absolute',
              right: 10,
              color: Colors.GRAY,
              top: 0,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              navigateToUser(
                post.name,
                post.profile_picture,
                post.title,
                post.baner,
              )
            }>
            <Image
              source={post.profile_picture}
              style={{
                borderRadius: 100,
                height: 60,
                width: 60,
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  navigateToUser(
                    post.name,
                    post.profile_picture,
                    post.title,
                    post.baner,
                  )
                }>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: Colors.BLACK,
                  }}>
                  {' '}
                  {post.name}{' '}
                </Text>
              </TouchableOpacity>

              {post.connection ? (
                <Text style={{fontWeight: 'bold'}}>
                  <Icon name="dot-single" color={Colors.GRAY} size={16} />
                  <Text> {post.connection} </Text>
                </Text>
              ) : null}
            </View>
            <Text style={{width: 180}} numberOfLines={1} ellipsizeMode="tail">
              {' '}
              {post.title}{' '}
            </Text>
            <Text style={{fontSize: 12}}> {post.timeAgo} hr</Text>
          </View>
          {post.connection ? (
            <TouchableOpacity
              onPress={() => {}}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="plus" size={22} color={Colors.BLUE} />
              <Text
                style={{
                  color: Colors.BLUE,
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Follow
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {post.content ? (
          <Text
            style={{
              paddingHorizontal: 16,
              textAlign: 'justify',
              color: Colors.BLACK,
              marginVertical: 10,
            }}
            // numberOfLines={3}
            // ellipsizeMode="tail"
          >
            {post.content}
          </Text>
        ) : (
          <View style={{marginTop: 10}} />
        )}
        {post.hasImage ? (
          <TouchableOpacity
          onPress={() =>
            navigateToPostImage(
              post.postImage
            )
          }
          >
            <Image
              source={post.postImage}
              style={{height: 300, width: deviceWidth}}
            />
          </TouchableOpacity>
        ) : null}

        <View
          style={{
            borderTopColor: Colors.LIGHT_GRAY,
            borderTopWidth: 1,
            marginTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 5,
            paddingHorizontal: 10,
          }}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image
              source={Images.LIKE}
              style={{height: 25, width: 25, borderRadius: 100}}
            />
            <Text> {post.likes} likes</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {post.comments > 0 ? (
              <Text> {updatedPost.comments} comments</Text>
            ) : null}
            {post.comments > 0 && post.shares > 0 ? (
              <Icon name="dot-single" size={16} color={Colors.GRAY} />
            ) : null}
            {post.shares > 0 ? <Text> {post.shares} shares</Text> : null}
          </View>
        </View>
        {/* Phần nhập comment */}
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Icon2
              name="camera"
              style={{fontSize: 30, color: 'blue', marginLeft: 10}}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Write a comment..."
            value={commentText}
            onChangeText={text => setCommentText(text)}></TextInput>
          <TouchableOpacity style={styles.sendButton} onPress={addComment}>
            <Icon1 name="send" size={25} color="blue" />
          </TouchableOpacity>
        </View>
        {/* Hiển thị danh sách bình luận */}
        <FlatList
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{marginVertical: 10, marginHorizontal: 8}}>
              <View style={[styles.commentContainer, {flexDirection: 'row'}]}>
                <Image
                  source={senderImage} // Sử dụng senderImage cho sender
                  style={styles.senderImage}
                />
                <View style={styles.commentItem}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.commentText}>
                      {item.text.toString()}
                    </Text>
                    <Text style={styles.timeText}>{item.time.toString()}</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 70}}>
                <TouchableOpacity>
                  <Text style={{}}>Like </Text>
                </TouchableOpacity>
                <Text style={{}}> | </Text>
                <TouchableOpacity>
                  <Text style={{}}> Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 200}}
                  onPress={() => deleteComment(updatedPost.id, item.id)}>
                  <Icon2 name="trash" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 10,
  },
  commentContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    // marginBottom: 10,
  },
  commentText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  sendButton: {
    padding: 10,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // paddingHorizontal: 10,
    paddingLeft: 10,
    paddingVertical: 5,
    backgroundColor: '#c5f1fbff',
    width: 320,
    borderRadius: 10,
    padding: 10,
  },
  senderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentText: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#c5f1fbff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
  },
  timeText: {
    fontSize: 12,
    marginLeft: 10,
    // paddingLeft:40
    color: 'black',
  },
});
