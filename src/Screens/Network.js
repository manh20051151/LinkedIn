import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Networks from '../Data/Network';
import ShowNetworks from '../Components/ShowNetworks';
import GoToNotifications from '../Components/GoToNotifications'


export default function Network() {
  return (
    <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: Colors.WHITE,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
          Manage my Network
        </Text>
      </TouchableOpacity>
      
      <GoToNotifications />

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.WHITE,
          paddingHorizontal: 16,
          paddingVertical: 10,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: Colors.BLACK,
            fontSize: 19,
            marginVertical: 10,
          }}>
          People you may know
        </Text>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          numColumns={2}
          data={Networks}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ShowNetworks item={item} />}
        />
      </View>
    </ScrollView>
  );
}
