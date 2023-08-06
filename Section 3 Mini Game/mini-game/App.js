import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { SafeAreaViewBase } from 'react-native';
import Colors from './constants/colors';

export default function App() {

    const [userNumber, setUserNumber] = useState();

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if(userNumber){
        screen = <GameScreen/>
    }

    return (
        <LinearGradient colors={[Colors.secondary500, Colors.primary500]} style={styles.rootScreen}>
            <StatusBar style='light'/>
            <ImageBackground 
                source={require('./assets/images/background.jpg')} 
                resizeMode='cover' 
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}>
                    <SafeAreaView style={styles.droidSafeArea}>
                        {screen}
                    </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: Colors.secondary500
    },
    backgroundImage: {
        opacity: 0.15
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});
