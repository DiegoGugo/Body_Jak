import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { StackedBarChart } from 'react-native-chart-kit';

export default function Monitoring() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../img/Noche.jpg')}
                    style={styles.topImage}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>Bezier Line Chart</Text>
                <StackedBarChart                                
                    data={{
                        labels: ["Tu sueño"],
                        legend: ["Sueño Profundo", "Sueño ligero", "Despierto"],
                        data: [
                            [120, 50, 150],
                        ],
                        barColors: ["#501CD8", "#7E66BE", "#C2AC4E"]
                    }}
                    width={Dimensions.get("window").width - 10} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: "#316F6F",
                        backgroundGradientFrom: "#3CB3B3",
                        backgroundGradientTo: "#03FFFF",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(9, 9, 9, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(9, 9, 9, ${opacity})`,
                        style: {     
                            alignItems:'center'                       
                        }
                    }}                    
                    style={{
                        marginVertical: 10,                        borderRadius:16
                    }}
                    withHorizontalLabels={true}                                      
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .48,
        marginBottom: 20,
    },
}); 
