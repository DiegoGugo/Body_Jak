
import { createStackNavigator } from 'react-navigation-stack';
import BluetoothConnectionScreens from '../screens/BluetoothConnection';

const BluetoothConnectionStacks = createStackNavigator({
    Nutrition: {
        screen: BluetoothConnectionScreens,
        navigationOptions: () => ({
            title: 'Conección Bluetooth'
        })
    }
});

export default BluetoothConnectionStacks;