import React from "react";
import {View, StyleSheet} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default Book2 = ({navigation}) =>{
    return(
        <View>
            <Text style={styles.heading}>Booking Schedule</Text>
            <TextInput
                style={styles.container}
                placeholder=""
                label='Departure Time'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Departure Date'
                />
            
            <Button style={styles.container} mode="contained" onPress={()=>{
                navigation.navigate('Page 3')
            }}>Next </Button>
        </View>
    )
}
const styles=StyleSheet.create({
    container : {
        margin: 20
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})