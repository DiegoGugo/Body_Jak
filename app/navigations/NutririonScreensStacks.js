
import { createStackNavigator } from 'react-navigation-stack';
import NutritionScreens from '../screens/Nutrition';

const NutritionScreensStacks = createStackNavigator({
    Nutrition: {
        screen: NutritionScreens,
        navigationOptions: () => ({
            title: 'Nutrición'
        })
    }
});

export default NutritionScreensStacks;