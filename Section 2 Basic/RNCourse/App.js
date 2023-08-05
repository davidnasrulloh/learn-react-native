import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [courseGoals, setCourseGoals] = useState([])

    function startModalGoalHandler() {
        setModalIsVisible(true)
    }

    function addGoalHandler(inputText) {
        setCourseGoals((currentGoals) => [
            ...currentGoals, 
            {text: inputText, id: Math.random().toString()}
        ])
        endAddGoalHandler()
    }

    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    function clearAll() {
        setCourseGoals([])
    }

    function deleteItemHandler(id){
        console.log(id)
        setCourseGoals(currentCourseGoal => {
            return currentCourseGoal.filter((goal)=>goal.id !== id)
        })
    }

    return (
        <>
            <StatusBar style="light"/>
            <View style={styles.appContainer}>
                <View style={{ marginBottom: 12 }}>
                    <Button title='Add New Goals' onPress={startModalGoalHandler} color="#5e0acc"/>
                </View>
                <GoalInput onAddGoal={addGoalHandler} endAddGoal={endAddGoalHandler} visible={modalIsVisible} />
                <View style={{ marginBottom: 12 }}>
                    <Button title='Clear All' onPress={clearAll}/>
                </View>
                <View style={styles.goalsContainer}>
                    <FlatList 
                        data={courseGoals}
                        alwaysBounceVertical={false}
                        renderItem={(itemData) => {
                            return(
                                <GoalItem itemData={itemData} onDeleteItem={deleteItemHandler} />
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
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 20,
    },
});
