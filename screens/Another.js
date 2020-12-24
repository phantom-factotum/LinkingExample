import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Linking from 'expo-linking';

import useLink from './useLink'

export default function (props){
  useLink()
  return (
    <View style={{flex:1}}>
      <Text>This is another screen</Text>
    </View>
  )
}