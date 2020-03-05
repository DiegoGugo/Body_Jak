import { createStackNavigator } from 'react-navigation-stack';
import ExercisesScreen from '../screens/Exercises'

const ExercisesScreensStacks = createStackNavigator({
    Exercises: {
        screen: ExercisesScreen,
        navigationOptions: ()=> ({
            title:'Ejercicios'
        })
    }
});

export default ExercisesScreensStacks;