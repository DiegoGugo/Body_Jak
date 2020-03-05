import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import BluetoothSerial from 'react-native-bluetooth-serial'

class BluetoothConnection extends Component {

     /* componentWillMount() {
        Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
            values => {
                const [isEnabled, devices] = values;
                this.setState({ isEnabled, devices, devicesFormatted });
            }
        );

        BluetoothSerial.on("bluetoothEnabled", () =>
            console.log("Bluetooth enabled")
        );

        BluetoothSerial.on("bluetoothDisabled", () =>
            console.log("Bluetooth disabled")
        );

        BluetoothSerial.on("error", err => {
            console.log("error", err);
        });

        BluetoothSerial.on("connectionLost", () => {
            if (this.state.device) {
                this.connect(this.state.device)
                    .then(res => { })
                    .catch(err => {
                        console.log("error", err);
                    });
            }
        });
    } */ 
    
    render() {
        return (
            <View>
                <Text>Hola</Text>
            </View>
        )
    }
}

export default BluetoothConnection; 



