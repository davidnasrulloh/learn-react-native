import React from 'react'
import { Button, Text, View, Pressable, StyleSheet } from 'react-native'

const PrimaryButton = ({children}) => {

    const pressHandler = () => {
        console.log("pressButon")
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: '644202' }}>
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#EDE4FF',
        paddingVertical: 10,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#6528F7',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    }
})