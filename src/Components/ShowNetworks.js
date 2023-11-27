import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import CustomIcon from './CustomIcon';
import {useNavigation} from '@react-navigation/native';
export default function ShowNetworks({item}) {
  const navigation = useNavigation();
  const navigateToUser = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('User', {recipientName, recipientImage, title, baner});
  };
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        margin: 5,
        width: 170,
        height: 270,
        alignItems: 'center',
      }}>
      <Image
        source={item.banner}
        style={{
          height: 70,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadiusRadius: 10,
        }}
      />
      <TouchableOpacity
        onPress={() =>
          navigateToUser(
            item.name,
            item.profile_picture,
            item.title,
            item.banner,
          )
        }>
        <Image
          source={item.profile_picture}
          style={{height: 100, width: 100, borderRadius: 100, marginTop: -50}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
          marginTop: 5,
          paddingHorizontal: 7,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          paddingHorizontal: 7,
          height: 35,
          marginBottom: 10,
        }}>
        {item.title}
      </Text>
      {item.hasSameCompany ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Images.COMPANY}
            style={{height: 20, width: 20, borderRadius: 100, marginRight: 10}}
          />
          <Text style={{fontSize: 13}}>IUH University </Text>
        </View>
      ) : item.mutualConnections > 0 ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomIcon
            name="ellipsis-horizontal-circle"
            size={19}
            color={Colors.GRAY}
          />
          <Text style={{fontSize: 13, marginLeft: 2}}>
            {item.mutualConnections} mutual Connections
          </Text>
        </View>
      ) : (
        <View style={{height: 20}} />
      )}
      <TouchableOpacity
        onPress={() => {}}
        style={{
          borderRadius: 100,
          borderWidth: 1,
          borderColor: Colors.BLUE,
          paddingHorizontal: 30,
          paddingVertical: 2,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 19, color: Colors.BLUE, fontWeight: 'bold'}}>
          Content
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
