import React from "react";
import {View, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Button, Text, Appbar , Avatar} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Book2 from "./Book2";


export default Book1 = ({navigation}) =>{
    return(
        <ScrollView>
            <Text style={styles.heading}>Booking</Text>
            <Avatar.Image size={100}  source={require('./pictures/item.jpg')} />
            <Button style={styles.container} mode="contained">Upload Item Image</Button>
            <TextInput
                    style={styles.container}
                    placeholder=''
                    label='Order Name'
            />
            <TextInput
                    style={styles.container}
                    placeholder=''
                    label='Weight'
            />
            <TextInput
                    style={styles.container} 
                    placeholder=''
                    label='Size'
            />



            <Button style={styles.container} mode="contained" onPress={()=>{
                navigation.navigate('Page 2')
            }}>Next </Button>
            <Button style={styles.container} mode="contained" onPress={()=>{
                navigation.navigate('Login')
            }}>LogOut </Button>
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
