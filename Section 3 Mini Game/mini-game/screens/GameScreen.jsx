import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            <View>
                <Text>Higher or lower?</Text>
                {/* + - */}
            </View>
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
})