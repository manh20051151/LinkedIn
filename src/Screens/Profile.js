import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Colors from '../Utils/Colors';
import * as ProfileData from '../Data/Profile';
import Icon from 'react-native-vector-icons/Entypo';
import CustomIcon from '../Components/CustomIcon';
import Heading from '../Components/Heading';
import Footer from '../Components/Footer';
import SectionHeading from '../Components/SectionHeading';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const DATA = ProfileData.default;
  const navigation = useNavigation();

  const navigateToChat = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('Chat', {recipientName, recipientImage, title, baner});
  };
  const navigateToUser = (recipientName, recipientImage, title, baner) => {
    navigation.navigate('User', {
      recipientName,
      recipientImage,
      title,
      baner,
    });
  };
  const navigateToUserImage = rImage => {
    navigation.navigate('UserImage', {rImage});
  };
  const navigateToUserBanner = rBanner => {
    navigation.navigate('UserBanner', {rBanner});
  };



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

  const [showAllExperience, setShowAllExperience] = useState(false);
  const [experienceToShow, setExperienceToShow] = useState(DATA.EXPERIENCE.slice(0, 2));

  // Hàm hiện thị tất cả experience
  const handleShowAllExperience = () => {
    if (showAllExperience) {
      setExperienceToShow(DATA.EXPERIENCE.slice(0, 2)); // Chỉ hiển thị hai mục ban đầu khi nhấn lại
    } else {
      setExperienceToShow(DATA.EXPERIENCE); // Hiển thị tất cả các mục
    }
    setShowAllExperience(!showAllExperience); // Đảo ngược trạng thái hiển thị
  };
  const ShowExperience = () =>
    experienceToShow.map((item, index) => (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: Colors.GRAY,
          borderBottomWidth: 1,
          paddingVertical: 10,
        }}>
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
          <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
            {item.title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: Colors.GRAY}}>
              {item.companyName}
            </Text>
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
            <Text style={{fontSize: 16, color: Colors.GRAY}}>
              {item.jobType}
            </Text>
          </View>
          <Text style={{fontSize: 15}}>
            {item.startDate} - {item.endDate}
          </Text>
        </View>
      </View>
    ));

  const ShowEducation = () =>
    DATA.EDUCATION.map((item, index) => (
      <View
        key={index}
        style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}>
        <Image
          source={item.logo}
          style={{height: 50, width: 50, marginHorizontal: 16}}
        />
        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              color: Colors.BLACK,
              width: 250,
            }}>
            {item.college}
          </Text>
          <Text style={{color: Colors.BLACK}}> {item.name} </Text>
          <Text>{item.time}</Text>
        </View>
      </View>
    ));

  const ShowLicenses = () =>
    DATA.LICENSE_CERTIFICATION.map((item, index) => (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: Colors.LIGHT_GRAY,
        }}>
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
          <Text style={{fontSize: 19, color: Colors.BLACK, fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>
              issued = {item.issuedDate} {''}
            </Text>
            <Text>
              {item.expirationDate
                ? `Expires on ${item.expirationDate}`
                : 'No expiration date'}
            </Text>
          </View>
          {item.hasCertificate ? (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 100,
                borderColor: Colors.GRAY,
                borderWidth: 1.5,
                alignSelf: 'flex-start',
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Show Credentials
              </Text>
              <Icon name="link" size={19} color={Colors.GRAY} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    ));

  const ShowSkills = () =>
    DATA.SKILLS.map((item, index) => (
      <View
        key={index}
        style={{
          borderBottomColor: Colors.GRAY,
          borderBottomWidth: 1,
          paddingVertical: 5,
        }}>
        <Text
          style={{fontSize: 19, fontWeight: 'bold', color: Colors.LIGHT_GRAY}}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomIcon
            name="people"
            size={34}
            color={Colors.GRAY}
            style={{marginRight: 10}}
          />
          <Text>
            {item.endorsements}{' '}
            {item.endorsements > 1 ? 'endorsements' : 'endorsement'}
          </Text>
        </View>
      </View>
    ));

  const ShowCourses = () =>
    DATA.COURSES.map((item, index) => (
      <View
        key={index}
        style={{
          borderBlockColor: Colors.LIGHT_GRAY,
          borderBottomWidth: 1,
          paddingVertical: 10,
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 17, color: Colors.BLACK}}>{item}</Text>
      </View>
    ));

  const ShowProjects = () =>
    DATA.PROJECTS.map((item, index) => (
      <View
        key={index}
        style={{
          borderBottomColor: Colors.LIGHT_GRAY,
          paddingVertical: 10,
          marginHorizontal: 10,
          borderBottomWidth: 1.5,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.BLACK}}>
          {item.title}
        </Text>
        <Text
          style={{color: Colors.GRAY}}
          numberOfLines={1}
          ellipsizeMode="tail">
          {' '}
          {item.description}{' '}
        </Text>
        {item.isLinkPresent ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 100,
              marginTop: 10,
              borderWidth: 1.5,
              borderColor: Colors.GRAY,
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignSelf: 'flex-start',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Show Projects
            </Text>
            <Icon
              name="link"
              size={19}
              color={Colors.GRAY}
              style={{marginLeft: 5}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    ));

  const ShowPeople = () => {
    return DATA.PEOPLE_VIEWED.map((item, index) => (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
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
            style={{height: 50, width: 50, borderRadius: 100, marginRight: 10}}
          />
        </TouchableOpacity>
        <View style={{width: 270}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLACK}}>
            {' '}
            {item.name}{' '}
          </Text>
          <Text> {item.title} </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigateToChat(
              item.name,
              item.profile_picture,
              item.title,
              item.banner,
            )
          }
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
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{backgroundColor: Colors.WHITE, marginBottom: 10}}>
        <TouchableOpacity onPress={() => navigateToUserBanner(DATA.INFO.banner)}>
          <Image
            source={DATA.INFO.banner}
            style={{width: '100%', height: 100}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToUserImage(DATA.INFO.profile_picture)}>
          <Image
            source={DATA.INFO.profile_picture}
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
            {DATA.INFO.name}
          </Text>
          <Text style={{fontSize: 16, color: Colors.BLACK}}>
            {DATA.INFO.bio}
          </Text>
          <Text style={{marginTop: 4, marginBottom: 10}}>
            Tasks about - {DATA.INFO.talksAbout.map(item => `${item}`)}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLUE}}>
              {DATA.INFO.followers} followers
            </Text>
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.BLUE}}>
              {DATA.INFO.connections > 500 ? '500+' : DATA.INFO.connections}
              connections
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 16,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: Colors.BLUE,
              borderRadius: 100,
              width: 140,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 19, color: Colors.WHITE}}>Open to</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 100,
              width: 140,
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 19, color: Colors.GRAY}}>Add Section</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderRadius: 100,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              height: 35,
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="dots-three-horizontal" size={19} color={Colors.GRAY} />
          </TouchableOpacity>
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

      <View
        style={{
          backgroundColor: Colors.WHITE,
          padding: 10,
          marginBottom: 10,
          paddingBottom: 0,
        }}>
        <SectionHeading title="Experience" />
        <ShowExperience />
        <Footer onPressShowAll={handleShowAllExperience} />
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          padding: 10,
          marginBottom: 10,
          paddingBottom: 0,
        }}>
        <SectionHeading title="Education" />
        <ShowEducation />
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          padding: 10,
          marginBottom: 10,
          paddingBottom: 0,
        }}>
        <SectionHeading title="Licenses & Certifications" />
        <ShowLicenses />
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          padding: 10,
          marginBottom: 10,
          paddingBottom: 0,
        }}>
        <SectionHeading title="Skills" />
        <ShowSkills />
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          padding: 10,
          marginBottom: 10,
          paddingBottom: 0,
        }}>
        <SectionHeading title="Courses" />
        <ShowCourses />
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          padding: 10,
          marginBottom: 5,
          paddingBottom: 0,
        }}>
        <SectionHeading title="Projects" />
        <ShowProjects />
      </View>

      <View
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          padding: 10,
          paddingBottom: 0,
        }}>
        <SectionHeading title="People also viewed" />
        <ShowPeople />
      </View>
    </ScrollView>
  );
}
