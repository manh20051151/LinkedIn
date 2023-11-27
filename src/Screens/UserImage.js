import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Colors from '../Utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {deviceWidth} from '../Components/Dimensions';
export default function UserImage() {
    const route = useRoute();
    const navigation = useNavigation();
    const {rImage} = route.params;
  return (
    <View style={{justifyContent: 'center', alignItems:'center', flex:1, backgroundColor: Colors.BLACK}}>
      <Image source={rImage} style={{width: deviceWidth, height: "100%", resizeMode:'contain'}} />
      <TouchableOpacity
        style={{position: 'absolute', top: 10, left: 10}}
        onPress={() => navigation.goBack()}>
        <Icon1
          name="close"
          style={{
            fontSize: 40,
            color: Colors.WHITE,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
