import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Linking from 'expo-linking';

import Home from './screens/Home'
import Other from './screens/Other'
import Another from './screens/Another'
const appJson = require('./app.json')
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const appName = appJson.expo.scheme || 'myapp'
export default function App() {
  let prefixes = [ 
    Linking.makeUrl('/'),
    appName+'://',
    `https://${appName}.com`
  ]
  
  const linking = {
    prefixes:prefixes,
      config:{
        screens:{
          Home:'home',
          Other:'other',
          Another:'another',
        }
      }
  }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Other" component={Other} />
        <Stack.Screen name="Another" component={Another} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:'90%',
    borderColor:'gray',
    borderBottomWidth:2,
    textAlign:'center',
    paddingVertical:5
  },
  button:{
    padding:10,
  }
});
