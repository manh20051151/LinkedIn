import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Heading from './Heading';
import CustomIcon from './CustomIcon';


export default function SectionHeading({title}) {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    }}>
    <Heading title={title} />
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => {}}>
        <CustomIcon name="add" size={28} color={Colors.GRAY} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <CustomIcon name="pencil" size={22} color={Colors.GRAY} />
      </TouchableOpacity>
    </View>
  </View>
  )
}