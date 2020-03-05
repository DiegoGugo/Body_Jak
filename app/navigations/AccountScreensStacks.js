
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreens from '../screens/Account';

const AccountgScreensStacks = createStackNavigator({
    Nutrition: {
        screen: AccountScreens,
        navigationOptions: () => ({
            title: 'Mi cuenta'
        })
    }
});

export default AccountgScreensStacks;