import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import Colors from '../Utils/Colors';

export default function Footer({ onPressShowAll }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        paddingVertical: 4,
        borderTopColor: Colors.LIGHT_GRAY,
      }}>
      <TouchableOpacity
        onPress={onPressShowAll}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 19, color: Colors.BLUE, fontWeight: 'bold'}}>
          Show All / Shrink
        </Text>
        <CustomIcon name="arrow-forward" size={19} color={Colors.BLUE} />
      </TouchableOpacity>
    </View>
  );
}
