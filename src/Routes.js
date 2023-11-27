import { View, Text, TouchableOpacity, Image, TextInput, StatusBar} from 'react-native'

import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './Utils/Screens';
import Home from './Screens/Home';
import Job from './Screens/Job';
import Network from './Screens/Network';
import Notification from './Screens/Notification';
import Post from './Screens/Post';
import Profile from './Screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './Utils/Colors';
import Images from './Utils/Images';
import CustomIcon from './Components/CustomIcon';
import Chat from './Screens/Chat';
import ChatList from './Screens/ChatList';
import User from './Screens/User'; 
import Comment from './Screens/Comment';
import UserImage from './Screens/UserImage';
import UserBanner from './Screens/UserBanner';
import PostImage from './Screens/PostImage';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false}}>
        <HomeStack.Screen name={Screens.HOME} component={Home} />
        <HomeStack.Screen name={Screens.PROFILE} component={Profile} />
        <HomeStack.Screen name={'Chat'} component={Chat} />
        <HomeStack.Screen name={'ChatList'} component={ChatList} />
        <HomeStack.Screen name={'User'} component={User} />
        <HomeStack.Screen name={'Comment'} component={Comment} />
        <HomeStack.Screen name={'UserImage'} component={UserImage} />
        <HomeStack.Screen name={'UserBanner'} component={UserBanner} />
        <HomeStack.Screen name={'PostImage'} component={PostImage} />
    
    </HomeStack.Navigator>
)
const JobScreen = () => (
    <JobStack.Navigator screenOptions={{headerShown: false}}>
      <JobStack.Screen name={Screens.JOB} component={Job} />
    </JobStack.Navigator>
  );
  
  const PostScreen = () => (
    <PostStack.Navigator screenOptions={{headerShown: false}}>
      <PostStack.Screen name={Screens.POST} component={Post} />
    </PostStack.Navigator>
  );
  
  const NetworkScreen = () => (
    <NetworkStack.Navigator screenOptions={{headerShown: false}}>
      <NetworkStack.Screen name={Screens.NETWORK} component={Network} />
    </NetworkStack.Navigator>
  );
  
  const NotificationScreen = () => (
    <NotificationStack.Navigator screenOptions={{headerShown: false}}>
      <NotificationStack.Screen
        name={Screens.NOTIFICATION}
        component={Notification}
      />
    </NotificationStack.Navigator>
  );

const HeaderOptions = ({iconsLeft, navigation, isPostScreen}) => (
  <View style = {{flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.WHITE, elevation: 4, paddingVertical: 10}}>
    <View style= {{paddingLeft: 10}} >
      {
        isPostScreen ? <TouchableOpacity onPress={()=> navigation.navigate(Screens.HOME)}> 
          <CustomIcon name = {iconsLeft} size={34} color = {Colors.BLACK} />
        </TouchableOpacity> : <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)}>
          <Image source={Images.PROFILE_PICTURE} 
            style = {{height: 35, width: 35, borderRadius: 100}}
          />
        </TouchableOpacity>
      }
    </View>

    {
      isPostScreen ? <Text style ={{width: 260, marginHorizontal: 16, fontSize: 18,height: 38, fontWeight: 'bold',
      color: Colors.BLACK}}>Share post </Text> : <TextInput placeholder='Search'
        placeholderTextColor={Colors.BLACK} 
        style = {{borderRadius: 5, marginHorizontal: 20, width: 260, height: 38, backgroundColor: Colors.BLUE1, paddingLeft: 10}}
      />
    }

    <TouchableOpacity onPress={() => navigation.navigate('ChatList')}>
      {
        isPostScreen ? <Text 
        style = {{color: Colors.GRAY, fontSize: 16, fontWeight: 'bold'}}></Text> : <CustomIcon name= 'chatbubble-ellipses-outline' size= {28} color={Colors.GRAY}  /> 
      }
    </TouchableOpacity>
  </View>

)

const showTabBar = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  routeName === Screens.PROFILE || routeName === Screens.CHAT ? 'none' : 'flex'
}

const header = (navigation, route, icon, title, iconsLeft, isPostScreen, isNotificationScreen) => ({
    title: title,
    tabBarStyle: { display: showTabBar(route)},
    tabBarBadge: isNotificationScreen ? 5 : null,
    tabBarIcon: ({focused}) => (
        <CustomIcon name={icon} size={28} color={focused ? Colors.BLACK : Colors.GRAY} />
    ),
    header: () => <HeaderOptions  iconsLeft = {iconsLeft} navigation = {navigation} isPostScreen = {isPostScreen} />
})



export default function Routes() {
    return (
        <NavigationContainer>
          <StatusBar backgroundColor= {Colors.WHITE} barStyle = 'dark-content' />
            <Tab.Navigator screenOptions = {{
              tabBarActiveTintColor: Colors.BLACK,
              tabBarInactiveTintColor: Colors.GRAY,
              tabBarLabeStyle: { fontWeight: 'bold', fontSize: 12 },
              headerStyle: {elevation: 10}
              }} >
                <Tab.Screen name={Screens.HOME_STACK} component={HomeScreen} 
                options={({navigation, route}) => header(navigation, route, 'home', 'Home')}
                />
                <Tab.Screen name={Screens.NETWORK_STACK} component={Network} 
                options={({navigation, route}) => header(navigation, route, 'people', 'Network')}
                />
                <Tab.Screen name={Screens.POST_STACK} component={Post} 
                options={({navigation, route}) => header(navigation, route, 'add-circle', 'Post', 'close', true)}
                />
                <Tab.Screen name={Screens.NOTIFICATION_STACK} component={Notification} 
                options={({navigation, route}) => header(navigation, route, 'notifications', 'Notification', '', false, true)}
                />
                <Tab.Screen name={Screens.JOB_STACK} component={Job} 
                options={({navigation, route}) => header(navigation, route, 'briefcase', 'job')}
                />
                    
            </Tab.Navigator>
        </NavigationContainer>
    )
}