import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient colors={['#A076F9', '#EDE4FF']} style={styles.rootScreen}>
            <StartGameScreen/>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: '#ddb52f'
    }
});
