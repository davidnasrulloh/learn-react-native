import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({addGoalHandler, onAddGoal, endAddGoal , visible}) => {

    const [inputText, setInputText] = useState('')

    function goalInputHandler(enteredText){
        setInputText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(inputText)
        setInputText('')
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <View style={{ paddingHorizontal: 16, width: '100%' }}>
                    <TextInput style={styles.textInput} placeholder='Tujuan kursus mu' onChangeText={goalInputHandler} value={inputText} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={endAddGoal} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Tambah Goals' onPress={addGoalHandler} color="#5e0acc"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        color: '#120438',
        borderRadius: 12,
        height: 70,
        marginRight: 8,
        padding: 16,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        paddingHorizontal: 16,
        width: '100%'
    },
    button: {
        width: '48%'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})