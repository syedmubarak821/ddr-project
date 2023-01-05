import React from "react";
import {View, StyleSheet} from 'react-native'
import { TextInput, Button, Text} from 'react-native-paper';
import Snackbar from "react-native-snackbar";
export default Review = () =>{
    return(
        <View>
            <Text style={styles.heading}>Review Our Service</Text>
            <TextInput
                    style={styles.container}
                    placeholder=''
                    label='Enter Order ID'
            />
            <TextInput
                    style={styles.bigField}
                    placeholder=''
                    label='Add Review'
            />
            <Button style={styles.container} mode="contained" onPress={()=>{
                Snackbar.show({
                    text: 'Review recorded, Thank You!',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'close',
                      textColor: 'green',
                      onPress: () => { /* Do something. */ },
                    },
                  });
            }}>Submit</Button>
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
    bigField: {
        margin: 20,
        height: 100
    }
})