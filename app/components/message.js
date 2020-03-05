
import React from 'react';
import {View, Text, } from 'react-native';

export default function message (props) {

    const {error}=props;

    return(
        <View>
            <Text>{error}</Text>
        </View>
    );
}