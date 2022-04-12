import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import HeartAnim from "../components/HeartAnim";
import {VarText} from "../components/Text";
import {config, animated, useSpring} from "@react-spring/native";
import {AppContext} from "../global_state/AppStateProvider";

export default function Splash({navigation}) {

	const [logoAnimControl, setLogoAnimControl] = useState(false)
	const [state, dispatch] = useContext(AppContext)

	useEffect(()=>{

		async function startAnim(){
			setLogoAnimControl(true)
		}
		startAnim()
	}, [])

	const logoAnim = useSpring({
		opacity: logoAnimControl? 1:0,
		bottom: logoAnimControl? 24: -40,
		delay: 500,
		config: config.molasses
	})

	const logoTextAnim = useSpring({
		opacity: logoAnimControl? 1:0,
		bottom: logoAnimControl? 24: -40,
		delay: 700,
		config: config.molasses,
		onRest: ()=>{
			navigation.navigate("Welcome")
		}
	})

	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

			<animated.View style={[logoAnim, {  alignItems: 'center', justifyContent: 'center' }]}>
				<Image style={{
					height: 83.91,
					width: 71,
				}} source={require("../resource/logo2.png")}/>
			</animated.View>

			<animated.View style={[logoTextAnim, { alignItems: 'center', justifyContent: 'center' }]}>
				<Image style={{
					height: 25,
					width: 133,
					marginTop: 20.9,
				}} source={require("../resource/DailySoup.png")}/>
			</animated.View>
		</View>
	);
}