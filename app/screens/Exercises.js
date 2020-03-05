import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';

function ExercisesList(props) {
    return (
        <View style={styles.imageConatiner}>
            <Text style={{fontSize:18, marginBottom:5}}>Abdominales</Text>
            <Image
                style={styles.imageExerciseList}
                source={require('../img/ejer1.jpg')}
            ></Image>   
            <Text style={{fontSize:18, marginBottom:5}}>Planchas</Text>
            <Image
                style={styles.imageExerciseList}
                source={require('../img/ejer2.jpg')}
            ></Image>
            <Text style={{fontSize:18, marginBottom:5}}>Arabesque alto</Text>
            <Image
                style={styles.imageExerciseList}
                source={require('../img/ejer3.jpg')}                
            ></Image>
        </View>
    );
}

function Exercises() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../img/Ejercicios.jpg')}
                    style={styles.topImage}
                />
                <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center', marginBottom:10}}>Tu lista de ejercicios es</Text>
                <ExercisesList></ExercisesList>
            </View>            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-around',
        backgroundColor:'#fff'
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .5,
        marginBottom:20
    },
    imageConatiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',                
    },
    imageExerciseList: {
        width:Dimensions.get('window').width-20,
        height:150,
        marginTop:15,
        marginBottom:15     
    }
});

export default Exercises;