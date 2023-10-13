import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import slides from '../slides';
import SlideItem from '../components/SlideItem';


export default function Screens() {
  return (
    <View style={styles.container}>
      
      <FlatList data={slides} renderItem={({ item }) => <SlideItem item = {item} /> }
      horizontal
      pagingEnabled
      bounces = {false}
      />
      <StatusBar style="auto" />      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3ECF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
