import {View, Text, StyleSheet, Modal, Image} from 'react-native';
import React, { useState } from 'react';
import Calendar from 'react-native-calendars/src/calendar'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(){

    let days = 0;

    const [showModal, setShowModal] = useState(false);
    return(
        <View style={{backgroundColor:'#A5E9FF', flex:1}}>
            <Text style = {{color:'black', fontSize: 48}}>Streak</Text>
            <Text style = {{color:'black', fontSize: 24}}>You have logged in for {days} days</Text>
            <Calendar style = {{ borderRadius:10, elevation: 4, margin: 40}}
              onDayPress={day => {
                console.log('selected day', day);
              }}
              markingType={'period'}
              markedDates={{
                '2023-10-21': {startingDay: true, color: '#A5E9FF'},
                '2023-10-22': {selected: true, color: '#A5E9FF', textColor: 'black'},
                '2023-10-23': {selected: true, color: '#A5E9FF', textColor: 'black'},
                '2023-10-24': {selected: true, endingDay: true, color: '#A5E9FF', textColor: 'black'},
              }}/>
        </View>
    );
}