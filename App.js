import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Linking from 'expo-linking';

import Home from './screens/Home'
import Other from './screens/Other'
import Another from './screens/Another'
const appJson = require('./app.json')
console.log(JSON.stringify(appJson,null,2))
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  let prefixes = [ Linking.makeUrl() ]
  console.log(prefixes)
  if (appJson.expo.scheme || appJson["expo"]["scheme"]){
    let appName = appJson.expo.name
    prefixes.push(appName+"://")
    prefixes.push(`https://${appName}.com`)
  }
  const linking = {
    prefixes:prefixes,
      config:{
        screens:{
          Home:'home',
          Other:'other',
          Another:'another'
        }
      }
  }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="other" component={Other} />
        <Stack.Screen name="another" component={Another} />
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
