import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import CustomIcon from './CustomIcon';
import {useNavigation} from '@react-navigation/native';

export default function ShowJobs({item}) {
  const navigation = useNavigation();
  const navigateToUser = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('User', {recipientName, recipientImage, title, baner});
  };
  return (
    <View
      style={{marginVertical: 16, marginHorizontal: 25, flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() =>
          navigateToUser(item.name, item.logo, item.title, item.banner)
        }>
        <Image
          source={item.logo}
          style={{height: 50, width: 50, marginRight: 10}}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: Colors.BLACK,
            width: 250,
          }}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize: 16, color: Colors.LIGHT_LACK, marginTop: 3}}>
            {item.companyName}
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 14, color: Colors.GRAY, marginTop: 3}}>
          {item.location}
        </Text>
        {item.hasSchoolAlumni ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Images.LOGOS.UNIVERSITY}
              style={{height: 25, width: 25, marginVertical: 5}}
            />
            <Text style={{fontSize: 13, color: Colors.GRAY, marginLeft: 10}}>
              {item.alumniCount} school IUH
            </Text>
          </View>
        ) : null}

        <Text style={{fontSize: 13, color: Colors.GRAY}}>
          {' '}
          {item.daysAgo}
          {item.daysAgo > 1 ? ' days' : ' day'}
        </Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <CustomIcon name="bookmark-outline" size={28} color={Colors.GRAY} />
      </TouchableOpacity>
    </View>
  );
}
