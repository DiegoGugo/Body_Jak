import React from 'react';
import { View, Text, Switch , StyleSheet} from 'react-native';

function Toggle(props) {
    const {value,onValueChange}=props;
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={{ fontSize:20,fontWeight:'bold' }}>{value ? 'ON' : 'OFF'}</Text>
            </View>
            <Switch value={value} onValueChange={onValueChange} style={{width:50}}></Switch>
        </View>
    );

}

const styles=StyleSheet.create({
    container:{        
        paddingVertical:15,
        paddingHorizontal:10,
        flexDirection:'row',
        backgroundColor:'#fff'    
    },
    text:{
        flex:1,           
    },
});

export default Toggle;