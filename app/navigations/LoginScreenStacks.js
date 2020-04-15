import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginForm'
import ForgotPasswordScreen from '../screens/ForgotPassword'

const LoginScreenStacks = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Iniciar sesión'
        })
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: () => ({
            title: 'Recuperar contraseña'
        })
    }
});

export default LoginScreenStacks;