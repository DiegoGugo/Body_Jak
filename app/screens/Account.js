import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { Avatar, Image, Icon, Divider } from 'react-native-elements';
import axios from 'axios'

function Informacion(props) {

    const { text, description } = props;

    return (
        <View style={styles.infoC}>            
            <Text style={{ fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold' }}> {description}:</Text>            
            <Text style={{ fontSize: 16 }}> {text}</Text>            
        </View>
    );
}

export default function Account(props) {

    const [data, setData] = useState({});
    const [user, setUser] = useState('');
    const { navigation } = props;    

    const getToken = async () => {
        const token = await AsyncStorage.getItem('token');
        axios.post("https://health-corporis.herokuapp.com/api/infoCuenta", {//192.168.1.68:4000  https://health-corporis.herokuapp.com/api/infoCuenta
            token
        })
        .then(
            (res, err) => {
                setData(res.data.data)
                setUser(res.data.data.Usuario)
                if (err) {
                    console.log('Error data message')
                }
            }
        )
    };

    const deleteToken = async () => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Auth')
    }

    useEffect(() => {
        getToken();
    }, []);

    function pintar() {
        const info = data;
        if (info != ['data']) {
            const currentcies = Object.keys(info);
            return currentcies.map(c => (
                <Informacion key={c} description={c} text={info[c]} />
            ));
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={require('../img/trainer.jpg')} style={styles.imageContainer}>
                <View style={styles.containerTop}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            rounded
                            source={require('../img/react-logo.png')}
                            size={100}
                            title="Body-Jak Logo"
                        />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.userNameText}>Bienvenido {user}</Text>
                    </View>
                </View>
            </Image>
            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 18, fontFamily: 'sans-serif', marginBottom: 15, textAlign: 'center' }}>Informacion de la cuenta</Text>
                {pintar()}
            </View>
            <Button
                title='Cerrar Sesión'
                buttonStyle={styles.Fsesion}
                containerStyle={{ alignItems: 'center', marginBottom:20}}
                onPress={deleteToken}
            />
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    containerTop: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatarContainer: {
        marginTop: 10,
        marginBottom: 15
    },
    userNameText: {
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'rgba(250,250,250,1)',
        borderRadius: 10,
        padding: 5

    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .4,
    },
    infoContainer: {
        flex: 1,
        marginTop: 25,
        marginBottom: 10,
    },
    infoC: {
        flexDirection: 'row',
        marginLeft: 18,
        marginBottom: 13
    },
    Fsesion: {
        backgroundColor: '#FA0101',
        width: Dimensions.get('window').width * .65,
        alignContent: 'center'
    }
});