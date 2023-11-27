import {View, Text} from 'react-native';
import React from 'react';

export default function Heading({title}) {
  return (
    <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
      {title}
    </Text>
  );
}
