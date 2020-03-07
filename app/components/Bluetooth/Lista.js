import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import Empty from './Empty';
import Toggle from './Toggle';

function Lista() {

    const [lista, setLista] = useState([]);
    const [bolEnable, setBolEnable] = useState(false);



    useEffect(() => {
        async function init() {
            const enable=await BluetoothSerial.requestEnable();
            const lista=await BluetoothSerial.list();
            setLista(lista);
            setBolEnable(enable)
        }
        init();

        return()=>{
            async function remove() {
                await BluetoothSerial.stopScanning();
                console.log('Termino scanner');
            }
            remove()
        }
    }, [])

    function vacio() {
        if (lista.length === 0) {
            return <Empty></Empty>
        }
    }

    async function enableBluetooth (){
        try{
            await BluetoothSerial.requestEnable();
            const lista=await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnable(true);
            setLista(lista);
        }catch(err){
            console.log(err)
        }
    }

    async function disableBluetooth (){
        try{
            await BluetoothSerial.disable();            
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setLista([]);
        }catch(err){
            console.log(err)
        }
    }

    function toggleBluetooth(value){
        if (value) {
            return enableBluetooth();
        }
        disableBluetooth();
    }

    return (
        <View>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth}></Toggle>
            <View>
                {
                    lista.map((l, index) => (
                        <ListItem
                            key={index}
                            leftIcon={<Icon name='cellphone-link' size={30} />}
                            title={l.name}
                            subtitle={l.subtitle}
                            bottomDivider
                        />
                    ))
                }
                {vacio()}
            </View>

        </View>
    );

}

export default Lista;