import React from "react";
import {View, StyleSheet} from 'react-native'
import { TextInput, Button, Text, Appbar, DataTable } from 'react-native-paper';

export default Orders = () =>{
    return(
        <View>
            <Text style={styles.heading}>Orders list</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title >ID</DataTable.Title>
                    <DataTable.Title> Order Name</DataTable.Title>
                    <DataTable.Title>Status</DataTable.Title>
                    
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>01</DataTable.Cell>
                    <DataTable.Cell>Sugarcane</DataTable.Cell>
                    <DataTable.Cell>On the way</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>02</DataTable.Cell>
                    <DataTable.Cell>Steel</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
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