import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import * as ProfileData from '../Data/Profile';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../Components/CustomIcon';
import Heading from '../Components/Heading';
import Footer from '../Components/Footer';
import SectionHeading from '../Components/SectionHeading';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
export default function User() {
  const route = useRoute();
  const navigation = useNavigation();
  const DATA = ProfileData.default;
  const {recipientName, recipientImage, title, baner} = route.params;
  const Analytics = ({title, subTitle, icon}) => (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 10,
        flexDirection: 'row',
      }}>
      <CustomIcon
        name={icon}
        size={28}
        color={Colors.GRAY}
        style={{marginRight: 10}}
      />
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.BLACK}}>
            {title}
          </Text>
        </TouchableOpacity>
        <Text style={{color: Colors.LIGHT_LACK}}>{subTitle}</Text>
      </View>
    </View>
  );

  const navigateToUserImage = rImage => {
    navigation.navigate('UserImage', {rImage});
  };
  const navigateToUserBanner = rBanner => {
    navigation.navigate('UserBanner', {rBanner});
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: 10}}>
        <TouchableOpacity
        onPress={() => navigateToUserBanner(baner)}
        >
          <Image source={baner} style={{width: '100%', height: 100}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{position: 'absolute', top: 5, left: 10}}
          onPress={() => navigation.goBack()}>
          <Icon1
            name="arrow-back"
            style={{
              fontSize: 40,
              color: Colors.BLACK,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToUserImage(recipientImage)}>
          <Image
            source={recipientImage}
            style={{
              borderRadius: 100,
              height: 100,
              width: 100,
              borderColor: Colors.WHITE,
              borderWidth: 3,
              bottom: 50,
              left: 15,
            }}
          />
        </TouchableOpacity>

        <View style={{marginTop: -45, paddingHorizontal: 10}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: Colors.BLACK}}>
            {recipientName}
          </Text>
          <Text style={{fontSize: 16, color: Colors.BLACK}}>{title}</Text>
          <Text style={{marginTop: 4, marginBottom: 10}}>
            Tasks about - {DATA.INFO.talksAbout.map(item => `${item}`)}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLUE}}>
              2479 followers
            </Text> */}
            {/* <Icon name="dot-single" size={16} color={Colors.GRAY} /> */}
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLUE}}>
              {DATA.INFO.connections > 500 ? '500+' : DATA.INFO.connections}
              connections
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10}}>
        <Heading title="Analytics" />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomIcon name="eye" size={19} color={Colors.GRAY} />
          <Text> Private to you</Text>
        </View>

        <Analytics
          icon="people"
          title={`${DATA.ANALYTICS.profile_views} Profile view`}
          subTitle="Discover who's viewed your profile"
        />
        <Analytics
          icon="bar-chart"
          title={`${DATA.ANALYTICS.post_impressions} post_impressions`}
          subTitle="Check put who's engaing with your content"
        />
        <Analytics
          icon="search"
          title={`${DATA.ANALYTICS.search_appearence} search_appearence`}
          subTitle="See how often you appear in search results"
        />
      </View>
      <View
        style={{backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Heading title="About" />
          <TouchableOpacity onPress={() => {}}>
            <Icon name="pencil" size={22} color={Colors.GRAY} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: 15,
            color: Colors.BLACK,
            paddingHorizontal: 5,
            marginVertical: 7,
          }}
          numberOfLines={4}
          ellipsizeMode="tail">
          {DATA.ABOUT}
        </Text>
      </View>
    </ScrollView>
  );
}
