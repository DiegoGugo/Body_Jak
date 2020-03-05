import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

export default function LoginForm () {

    const [hidePassword,setHidePassWord]=useState(true);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    return (
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electronico'
                containerStyle={styles.inputForm}
                onChange={(e)=>setEmail(e.nativeEvent.text)}
            />
            <Input
                placeholder='Correo electronico'
                password={true}
                secureTextEntry={hidePassword}
                containerStyle={styles.inputForm}                
                onChange={(e)=>setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon 
                        type='material-community'
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                        iconStyle={styles.iconRight}
                        onPress={()=>setHidePassWord(!hidePassword)}
                    />
                }
            />
            <Button 
                title='Iniciar sesión'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                //onPress={}                
            />                
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    inputForm: {
        width: '100%',
        marginTop: 20
    },
    btnContainer:{
        marginTop:20,
        width:'95%'
    },
    iconRight: {
        color: '#c1c1c1'
    }
});