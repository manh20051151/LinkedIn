import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
export default function CustomIcon({name, size, color, ...props}) {
  return (
    <Icon name= {name} size= {size} color={color} {...props} /> 
  )
}