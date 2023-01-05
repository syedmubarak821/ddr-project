import React from "react";
import {View, StyleSheet, Image} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';

export default Orders = () =>{
    return(
        <View>
            <TextInput
                    style={styles.container} 
                    placeholder=''
                    label='Enter Order ID'
            />
             <Image style={{width:300 , height:200, marginLeft:50}} 
             source={require('./pictures/map.png')} />
            
            <Text style={styles.heading}>Estimated arrival time:</Text>
            <TextInput style={styles.container} >23:35:18</TextInput>

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