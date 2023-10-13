import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Screens from './components/Screens';


export default function App() {
  return (
    <View style={styles.container}>
      <Screens style={styles.container}/>
      <StatusBar style="auto" />      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5E9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
