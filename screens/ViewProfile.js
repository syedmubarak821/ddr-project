import React from "react";
import {View, StyleSheet, ScrollView, Image} from 'react-native'
import { TextInput, Button, Text, Appbar, Avatar } from 'react-native-paper';

export default ViewProfile = () =>{
    return(
        <ScrollView>
            <Text style={styles.heading}>Update Picture</Text>
            <Avatar.Image size={100} source={require('./pictures/pic.png')} />
            <Button style={styles.container} mode="contained">Upload Image</Button>
            <TextInput
                style={styles.container}
                placeholder=""
                label='Name'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Email'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Username'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Business'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='New Password'
                />
            <TextInput
                style={styles.container}
                placeholder=""
                label='Confirm Password'
                />
            <Button style={styles.container} mode="contained">Update Profile</Button>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container : {
        margin: 20
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})
