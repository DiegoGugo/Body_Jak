import React, { useEffect , useState} from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Image, Icon, Divider } from 'react-native-elements';

function Informacion(props) {

    const { nameIcon, text, description } = props;

    return (
        <View style={styles.infoC}>            
            <Text style={{ fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold' }}> {description}:</Text>
            <Text style={{ fontSize: 16 }}> {text}</Text>
        </View>
    );
}

export default function Account() {    

    const [data, setData]=useState({});

    useEffect(() => {
        fetch('http://192.168.1.64:3000/api/account',{
            method:'GET'
        })
        .then(res => res.json())
        .then(data=>setData(data))
        .catch(err=>console.error(err));
    }, []);

    function pintar(){
        const info=data;
        const currentcies = Object.keys(info);    
        console.log(currentcies)             
        return currentcies.map(c=>(            
                <Informacion key={c} text={info[c].info} description={info[c].description}></Informacion>                            
        ));

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
                        <Text style={styles.userNameText}>OrcoLujoso</Text>
                    </View>
                </View>
            </Image>
            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 18, fontFamily: 'sans-serif', marginBottom: 15, textAlign: 'center' }}>Informacion de la cuenta</Text>
                {pintar()}
            </View>
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
        marginBottom:13 
    }
});