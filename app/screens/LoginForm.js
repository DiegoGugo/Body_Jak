import React, { useState } from 'react';
import { StyleSheet, View, Image, AsyncStorage, ScrollView, Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import axios from 'axios';
import Message from '../components/message';

function LoginForm(props) {
    const { navigation } = props;
    const [hidePassword, setHidePassWord] = useState(true);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    const doLogin = () => {
        axios.post("https://health-corporis.herokuapp.com/api/login", {
            user,
            password
        }).then(
            async (res) => {
                console.log(res.data.auth)
                if (res.data.auth === true) {
                    const token = res.data.token
                    await AsyncStorage.setItem('token', token)
                    navigation.navigate('App')
                } else {
                    setType('Error');
                    setMessage(res.data.message)
                }
            },
            err => {
                console.log('Error message')
            }
        )
    }

    return (
        <View>
            <Message style={styles.Message} type={type} message={message} />
            <ScrollView>
                <View style={styles.formContainer}>
                    <View>
                        <Image source={require('../img/honeypot_blanco_solo.png')} />
                    </View>
                    <Input
                        placeholder='Usuario ó correo electronico'
                        containerStyle={styles.inputForm}
                        onChange={(e) => setUser(e.nativeEvent.text)}
                    />
                    <Input
                        placeholder='Contraseña'
                        password={true}
                        secureTextEntry={hidePassword}
                        containerStyle={styles.inputForm}
                        onChange={(e) => setPassword(e.nativeEvent.text)}
                        rightIcon={
                            <Icon
                                type='material-community'
                                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                                iconStyle={styles.iconRight}
                                onPress={() => setHidePassWord(!hidePassword)}
                            />
                        }
                    />
                    <Button
                        title='Iniciar sesión'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btnStyle}
                        onPress={doLogin}
                    />
                    <Text style={styles.ForgatPass} onPress={() => navigation.navigate('ForgotPassword')}>¿Olvidaste tu contraseña?</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        marginTop:'15%'
    },
    inputForm: {
        width: '100%',
        marginTop: 20
    },
    btnContainer: {
        marginTop: 20,
        width: '95%',
        marginBottom: 10
    },
    iconRight: {
        color: '#c1c1c1'
    },
    Message: {
        marginBottom: 10,
    },
    ForgatPass: {
        fontSize: 17
    }
});