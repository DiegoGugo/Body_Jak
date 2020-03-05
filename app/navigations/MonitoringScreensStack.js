import { createStackNavigator } from 'react-navigation-stack';
import MonitoringScreens from '../screens/Monitoring';

const MonitoringScreensStacks = createStackNavigator({
    Nutrition: {
        screen: MonitoringScreens,
        navigationOptions: () => ({
            title: 'Monitoreo del sueño'
        })
    }
});

export default MonitoringScreensStacks;