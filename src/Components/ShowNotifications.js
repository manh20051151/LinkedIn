import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import CustomIcon from './CustomIcon';
import {useNavigation} from '@react-navigation/native';
export default function ShowNotifications({item}) {
  const navigation = useNavigation();
  const navigateToUser = (recipientName, recipientImage, title, baner ) => {
    navigation.navigate('User', {recipientName, recipientImage, title, baner});
  };
  
  const CTAButton = ({title}) => (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        borderRadius: 50,
        borderColor: Colors.BLUE,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
        width: 'auto',
      }}>
      <Text style={{fontSize: 16, color: Colors.BLACK}}> {title} </Text>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
      onPress={() => navigateToUser(item.name, item.logo, item.title, item.banner)}
      >
        <Image
          source={item.logo}
          style={{height: 50, width: 50, borderRadius: 100}}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: Colors.BLACK,
            width: 240,
            marginRight: 5,
          }}>
          {item.description}
        </Text>
        {item.isNewJob ? (
          <CTAButton title="View Job" />
        ) : item.isAView ? (
          <CTAButton title="See all views" />
        ) : item.isJobAlert ? (
          <CTAButton title="See 30+ Jobs" />
        ) : item.isBirthday ? (
          <CTAButton title="Say Happy Birthday" />
        ) : item.inConnectionsAccepted ? (
          <CTAButton title="message" />
        ) : item.isTrending ? (
          <Text style={{marginVertical: 5}}>
            {item.trendingCount} reactions
          </Text>
        ) : null}
      </View>

      <View>
        <Text style={{fontSize: 13, marginBottom: 10}}>
          {item.notificationTime}d
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <CustomIcon name="ellipsis-vertical" size={22} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
