import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import CustomIcon from './CustomIcon';
import Screens from '../Utils/Screens';
import {useNavigation} from '@react-navigation/native';
export default function GoToNotifications() {
  const navigation = useNavigation();

  const goToNotifications = () => {
    navigation.navigate('NOTIFICATION_STACK');
  };

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: Colors.BLACK,
          marginTop: 5,
          marginBottom: 10,
        }}>
        Invitaions have moved to notifications tab
      </Text>
      <TouchableOpacity
      onPress={goToNotifications}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 100,
          paddingHorizontal: 10,
          elevation: 5,
          backgroundColor: Colors.BLUE,
          paddingVertical: 5,
          alignSelf: 'flex-start',
        }}>
        <CustomIcon
          name="notifications"
          color={Colors.WHITE}
          size={19}
          style={{marginRight: 5}}
        />
        <Text style={{color: Colors.WHITE, fontSize: 16, fontWeight: 'bold'}}
          
        >
          Go To Notifications
        </Text>
      </TouchableOpacity>
    </View>
  );
}
