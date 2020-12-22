import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Switch,Linking as RNLinking} from 'react-native';
import * as Linking from 'expo-linking';
export default function (props){
	const [isLongHand, setIsLongHand ] = useState(false)
	const [navigateTo, setNavigateTo ] = useState('')
	
	async function navigate(path){
		let rootPath = Linking.makeUrl()
		// if long handed is toggled then path can be links to external apps
		path = isLongHand ? path : rootPath+'/'+path
		console.log(path)
		let canOpen = await Linking.canOpenURL(path)
		if(canOpen)
			await Linking.openURL(path)
		else
			Alert.alert('Cannot open provided url!','Url provided: '+path)
	}
	let switchText = `Using ${isLongHand ? 'full' :'auto-generated'} url`
  return (
    <View style={{flex:1,padding:5}}>
      <Text style={styles.titleText}>This is the home screen</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      	<Text>{switchText}</Text>
      	<Switch
		      trackColor={{ false: '#767577', true: '#81b0ff' }}
		      thumbColor={isLongHand ? '#f5dd4b' : '#f4f3f4'}
		      onValueChange={()=>setIsLongHand(prev=>!prev)}
		      value={isLongHand}
		    />
		  </View>
      <View style={{width:'90%',alignItems:'center'}}>
      	<TextInput
      		style={styles.textInput}
      		value={navigateTo}
      		onChangeText={text=>setNavigateTo(text)}
      		placeHolder="Type link here"
      	/>
      	<View style={styles.buttonWrapper}>
	      	<Button
	      		title="Navigate!"
	      		onPress={()=>navigate(navigateTo)}
	      		style={{width:'100%'}}
	    		/>
    		</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
	textInput:{
		width:'90%',
		textAlign:'center',
		fontSize:18,
		borderColor:'gray',
		borderBottomWidth:2,
		marginVertical:10
	},
	buttonWrapper:{
		width:'90%',
		textAlign:'center'
	},
	titleText:{
		fontSize:24,
		marginBottom:20,
		textAlign:'center'
	}
})