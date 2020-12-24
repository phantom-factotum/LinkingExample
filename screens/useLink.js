import React,{useState,useEffect} from 'react'
import * as Linking from 'expo-linking'
export default function useLink () {
	useEffect(()=>{
		Linking.addEventListener('url',(url)=>{
			console.log('a linking event occurred:')
			console.log(url)
		})
		return Linking.removeEventListener('url')
	})  
};
