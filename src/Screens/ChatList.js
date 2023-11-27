import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as ProfileData from '../Data/Profile';
import CustomIcon from '../Components/CustomIcon';
export default function ChatList() {
  const DATA = ProfileData.default;
  const navigation = useNavigation();
  const ShowPeople = () => {

    const navigateToChat = (recipientName, recipientImage, title, baner) => {
      navigation.navigate('Chat', {recipientName, recipientImage, title, baner});
    };
    const navigateToUser = (recipientName, recipientImage, title, baner ) => {
      navigation.navigate('User', {recipientName, recipientImage, title, baner});
    };
    
    return DATA.PEOPLE_VIEWED.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigateToChat(item.name, item.profile_picture, item.title, item.banner)}
        >
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={() => navigateToUser(item.name, item.profile_picture, item.title, item.banner)}
          >
            <Image
              source={item.profile_picture}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <View style={{width: 270}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLACK}}>
              {' '}
              {item.name}{' '}
            </Text>
            <Text> {item.title} </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              borderColor: Colors.GRAY,
              borderWidth: 1,
              padding: 5,
              alignItems: 'center',
              height: 35,
              width: 35,
            }}>
            <CustomIcon name="navigate" size={22} color={Colors.GRAY} />
          </View>
        </View>
      </TouchableOpacity>
    ));
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: 10}}>
        <View
          style={{
            backgroundColor: Colors.LIGHT_BLUE,
            padding: 10,
            paddingBottom: 0,
          }}>
          <ShowPeople />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
