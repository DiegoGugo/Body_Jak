import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';

function AuthLoading(props) {

    const { navigation } = props

    useEffect(() => {
        getToken();
    }, [])

    // Fetch the token from storage then navigate to our appropriate place
    const getToken = async () => {
        const token = await AsyncStorage.getItem('token');
        console.log(token)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        navigation.navigate(token ? 'App' : 'Auth');
    };

    // Render any loading content that you like here    
    return (
        <View>
            
        </View>
    );
}

export default AuthLoading;