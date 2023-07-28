import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [inputText, setInputText] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler(enteredText){
        setInputText(enteredText)
    }

    function addGoalHandler() {
        setCourseGoals((currentGoals) => [
            ...currentGoals, 
            {text: inputText, id: Math.random().toString()}
        ])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Tujuan kursus mu' onChangeText={goalInputHandler} />
                <Button title='Tambah Goals' onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList 
                    data={courseGoals}
                    alwaysBounceVertical={false}
                    renderItem={(itemData) => {
                        return(
                            <View style={styles.goalItem}>
                                <Text style={styles.goalText}>{itemData.item.text}, index : {itemData.index} , id : {itemData.item.id}</Text>
                            </View>
                        )
                    }} 
                    keyExtractor={(item, index)=>{
                        return item.id
                    }}
                    showsVerticalScrollIndicator={false}/>

                {/* <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
                    {
                        courseGoals.map((goal, index)=>(
                            <View style={styles.goalItem} key={index}>
                                <Text style={styles.goalText}>{goal}</Text>
                            </View>
                        ))
                    }
                </ScrollView> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginBottom: 12
    },
    textInput: {
        borderWidth: 1,
        flex: 1,
        borderColor: '#CCCCCC',
        width: '70%',
        marginRight: 8,
        padding: 2,
        paddingStart: 12
    },
    goalsContainer: {
        flex: 20,
    },
    goalItem: {
        marginBottom: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white',
        paddingStart: 8
    }
});
