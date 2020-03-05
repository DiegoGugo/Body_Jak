import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { PieChart } from 'react-native-chart-kit';

const data = [
    {
        name: "Carbohidratos",
        population: 4,
        color: "rgba(217, 198, 76, 1)",
        legendFontColor: "#000",
        legendFontSize: 16
    },
    {
        name: "Proteínas",
        population: 4,
        color: "rgba(183, 217, 76, 1)",
        legendFontColor: "#000",
        legendFontSize: 16
    },
    {
        name: "Grasas",
        population: 4,
        color: "rgba(217, 151, 76, 1)",
        legendFontColor: "#000",
        legendFontSize: 16
    }
];

function Nutrition() {

    useEffect(() => {

    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerImage}>
                <Image
                    source={require('../img/plato.png')}
                    style={styles.topImage}
                />
                </View>
                <Text style={styles.title}>Esta gráfica muestra las colarias necesarias
                que tienes que ingerir para lograr tu cometido</Text>
                <PieChart
                    data={data}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#316F6F",
                        backgroundGradientFrom: "#3CB3B3",
                        backgroundGradientTo: "#03FFFF",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(9, 9, 9, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(9, 9, 9, ${opacity})`,
                        style: {
                            alignItems: 'center'
                        }
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="10"
                    absolute
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        width: Dimensions.get('window').width - 50,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 15
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .5,
        marginBottom: 20,        
    },
    containerImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .5,
        backgroundColor:'rgba(185, 255, 234,1)'
    }
});

export default Nutrition;