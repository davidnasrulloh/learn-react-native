import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title';
import { useFonts } from "expo-font";
import {Ionicons} from "@expo/vector-icons"
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from './../components/ui/PrimaryButton';
import Card from './Card';
import InstructionText from './InstructionText';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {

        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!", "You know that this is wrong..", [
                {
                    text: 'Sorry!', style: 'cancel'
                }
            ])
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove-circle" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add-circle" size={24} color="black" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* Log Rounds */}
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 20
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }
})