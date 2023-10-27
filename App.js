import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Screens from './components/Screens';
import NavMenu from './components/NavMenu';




export default function App() {
  return (

    <NavMenu/>
    
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
