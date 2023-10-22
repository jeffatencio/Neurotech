import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import slides from '../slides';
import SlideItem from '../components/SlideItem';
import { useState, useRef } from 'react';
import Pageindicator from '../components/Pageindicator';
import MotionSlider from 'react-native-motion-slider';



export default function Screens() {
  const[currentIndex,setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;


  return (
    <View style={styles.container}>
    <View style={{flex: 3} }>
      <FlatList 
      data={slides} 
      
      renderItem={({ item,index }) => (
      <SlideItem item = {item} /> 
      
      
      )}
      
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator = {false}
      bounces = {false}
      keyExtractor={ (item) => item.id}
      onScroll={Animated.event([{nativeEvent: { contentOffset: {x: scrollX } } }], {
        useNativeDriver: false,
      })}
      onViewableItemsChanged = {viewableItemsChanged}
      scrollEventThrottle = {32}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
      
        />
      </View>

      <Pageindicator data={slides} scrollX={scrollX} />
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
