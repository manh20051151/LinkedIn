import {View, Text, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import React, {useState} from 'react';
import Colors from '../Utils/Colors';
import {deviceWidth} from './Dimensions';
import Images from '../Utils/Images';
import CustomIcon from './CustomIcon';
import {useNavigation} from '@react-navigation/native';

export default function ShowPosts({item, handleLike, confirmDelete}) {
  const navigation = useNavigation();
  const updateComments = async (postId, updatedComments) => {
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

    setPosts(updatedPosts);
    saveData(updatedPosts);
  };
  const navigateToUser = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('User', {recipientName, recipientImage, title, baner});
  };
  const navigateToComment = item => {
    navigation.navigate('Comment', {
      post: item,
      updateComments: updateComments,
    });
  };
  const navigateToPostImage = rPostImage => {
    navigation.navigate('PostImage', {rPostImage});
  };
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [postToDelete, setPostToDelete] = useState(null);
  // const confirmDelete = (post) => {
  //   setPostToDelete(post);
  //   setShowDeleteModal(true);
  // };

  // const handleDelete = () => {
  //   // Xử lý xóa bài đăng ở đây, ví dụ:
  //   // deletePost(postToDelete.id);
  //   // Sau khi xóa bài đăng, cập nhật lại danh sách hoặc thực hiện các thao tác cần thiết

  //   // Đóng modal xác nhận xóa
  //   setShowDeleteModal(false);
  //   // Reset thông tin bài đăng cần xóa
  //   setPostToDelete(null);
  // };
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 5,
        paddingVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() =>
            navigateToUser(
              item.name,
              item.profile_picture,
              item.title,
              item.baner,
            )
          }>
          <Image
            source={item.profile_picture}
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
                  item.name,
                  item.profile_picture,
                  item.title,
                  item.baner,
                )
              }>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLACK}}>
                {' '}
                {item.name}{' '}
              </Text>
            </TouchableOpacity>

            {item.connection ? (
              <Text style={{fontWeight: 'bold'}}>
                <Icon name="dot-single" color={Colors.GRAY} size={16} />
                <Text> {item.connection} </Text>
              </Text>
            ) : null}
          </View>
          <Text style={{width: 180}} numberOfLines={1} ellipsizeMode="tail">
            {' '}
            {item.title}{' '}
          </Text>
          <Text style={{fontSize: 12}}> {item.timeAgo} hr</Text>
        </View>
        {item.xoa ? (
          <TouchableOpacity
            onPress={() => confirmDelete(item)}
            style={{flexDirection: 'row', marginLeft: 100}}>
            <Icon2 name="trash" size={22} color={Colors.GRAY} />
          </TouchableOpacity>
        ) : null}
        {item.connection ? (
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
      {item.content ? (
        <TouchableOpacity onPress={() => navigateToComment(item)}>
          <Text
            style={{
              paddingHorizontal: 16,
              textAlign: 'justify',
              color: Colors.BLACK,
              marginVertical: 10,
            }}
            numberOfLines={3}
            ellipsizeMode="tail">
            {item.content}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={{marginTop: 10}} />
      )}
      {item.hasImage ? (
        <TouchableOpacity
        onPress={() =>
          navigateToPostImage(
            item.postImage
          )
        }
        >
          <Image
            source={item.postImage}
            style={{height: 300, width: deviceWidth}}
          />
        </TouchableOpacity>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 5,
          paddingHorizontal: 10,
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Image
            source={Images.LIKE}
            style={{height: 25, width: 25, borderRadius: 100}}
          />
          <Text> {item.likes} likes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {item.comments > 0 ? <Text> {item.comments} comments</Text> : null}
          {item.comments > 0 && item.shares > 0 ? (
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
          ) : null}
          {item.shares > 0 ? <Text> {item.shares} shares</Text> : null}
        </View>
      </View>
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
          paddingHorizontal: 40,
          paddingTop: 5,
        }}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => handleLike(item.id)}>
          <Icon
            name="thumbs-up"
            size={22}
            color={item.isLiked ? Colors.BLUE : Colors.GRAY}
          />
          <Text style={{color: item.isLiked ? Colors.BLUE : Colors.GRAY}}>
            like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigateToComment(item)}>
          <CustomIcon
            name="chatbubble-ellipses-outline"
            size={22}
            color={Colors.GRAY}
          />
          <Text>comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <Icon name="share" size={22} color={Colors.GRAY} />
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
          <CustomIcon name="send-outline" size={22} color={Colors.GRAY} />
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
      {/* Modal xác nhận xóa
            <Modal visible={showDeleteModal} transparent animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Are you sure you want to delete this post?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <TouchableOpacity onPress={() => setShowDeleteModal(false)}>
                <Text style={{ color: Colors.BLUE }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={{ color: Colors.RED }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
    </View>
  );
}
