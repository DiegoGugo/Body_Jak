import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';

function Empty() {

    return (
        <View style={styles.conatainer}>
            <Text style={styles.text}>No se encontraron dispositivos</Text>
            <Image
            style={styles.image}
            source={require('../../img/nodispositivos.png')}
            />
        </View>
    );

}

const styles=StyleSheet.create({
    conatainer:{
        flex:1,
        alignItems:'center'
    },
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height*.6,
    },
    text:{
        fontFamily:'roboto',
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:20
    }
});

export default Empty;