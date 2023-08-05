import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const GoalItem = ({itemData, onDeleteItem}) => {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#210644' }} onPress={onDeleteItem.bind(this, itemData.item.id)} 
                style={({pressed})=>pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{itemData.item.text}, index : {itemData.index} , id : {itemData.item.id}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        paddingStart: 8,
        padding: 8,
    }
})