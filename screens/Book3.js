import React from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Snackbar from "react-native-snackbar";

export default Book3 = ({navigation}) =>{
    return(
        <ScrollView>
            <Text style={styles.heading}>Add Location</Text>
            <Image style={{width:200 , height:200, marginLeft:50}} source={require('./pictures/map.png')} />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Source'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Destination'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Labour Required'
                />

            <TextInput
                style={styles.container}
                placeholder=""
                label='Suggest expected price'
                />

            <Button style={styles.container} mode="contained" onPress={()=>{
                Snackbar.show({
                    text: 'Order Booked',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'close',
                      textColor: 'green',
                      onPress: () => { /* Do something. */ },
                    },
                  });
            }}>Confirm Booking</Button>
            
        
        </ScrollView>
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
