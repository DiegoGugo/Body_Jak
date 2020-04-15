import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function message(props) {

    const { type, message } = props;

    if (type==='Error') { 
        return (
            <View style={[styles.Container, {backgroundColor:'red'}]}>
                <Text>{type}</Text><Text>{message}</Text>
            </View>
        )        
    }

    if (type==='Success') { 
        return (
            <View style={[styles.Container, {backgroundColor:'green'}]}>
                <Text>{type}</Text><Text>{message}</Text>
            </View>
        )        
    }

    return <View></View>
}

export default message;

const styles=StyleSheet.create({
    Container:{
        padding:15,        
    },
    Error:{

    }
});