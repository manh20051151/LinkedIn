import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Notifications from '../Data/Notifications'
import ShowNotifications from '../Components/ShowNotifications';

export default function Notification() {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginTop: 10,
        paddingHorizontal: 10,
      }}>
        <FlatList data={Notifications} 
          showsHorizontalScrollIndicator= {false}
          renderItem={({item}) => <ShowNotifications item={item} />}
        />
      </View>
  );
}
