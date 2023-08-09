import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

const GameOverScreen = () => {
    return (
        <View style={styles.container}>
            <Title>Game Over !!!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <View>
                <Text>Your phone needed <Text>X</Text> rounds to guess the number Y</Text>
            </View>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 24,
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        marginTop: 24
        // margin: 36
    },
    image : {
        width: '100%',
        height: '100%',
    }
})