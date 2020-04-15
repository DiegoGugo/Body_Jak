import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ExercisesScreensStacks from './ExercisesScreensStacks'
import NutritionScreensStacks from './NutririonScreensStacks';
import MonitoringScreensStacks from './MonitoringScreensStack';
import AccountScreensStacks from './AccountScreensStacks';
import BluetoothConnectionStacks from './BluetoothConnectionStacks';

import LoginScreenStacks from './LoginScreenStacks'
import AuthLoading from '../components/Auth/AuthLoading'

const MenuStack=createBottomTabNavigator({        
    Exercise:{
        screen: ExercisesScreensStacks,
        navigationOptions: ()=>({
            tabBarLabel:'Ejercicios',
            tabBarIcon:({tintColor})=>(
                <Icon 
                    name='run'
                    size={25}
                    color={tintColor}
                />
            ) 
        })
    },
    Nutrition:{
        screen: NutritionScreensStacks,
        navigationOptions:()=>({
            tabBarLabel:'Nutrición',
            tabBarIcon:({tintColor})=>(
                <Icon 
                    type='material-community'
                    name='food-apple'
                    size={25}
                    color={tintColor}
                />
            )
        })
    },
    Monitoring:{
        screen: MonitoringScreensStacks,
        navigationOptions:()=>({
            tabBarLabel:'Monitoreo de sueño',
            tabBarIcon:({tintColor})=>(
                <Icon 
                    type='material-community'
                    name='chart-bar'                    
                    color={tintColor}
                    size={25}
                />
            )
        })
    },
    Bluetooth: {
        screen: BluetoothConnectionStacks,
        navigationOptions:()=>({
            tabBarLabel:'Bluetooth',
            tabBarIcon:({tintColor})=>(
                <Icon 
                    type='material-community'
                    name='bluetooth'
                    color={tintColor}
                    size={25}
                />
            )
        })
    },
    Account: {
        screen: AccountScreensStacks,
        navigationOptions:()=>({
            tabBarLabel:'Mi Cuenta',
            tabBarIcon:({tintColor})=>(
                <Icon 
                    type='material-community'
                    name='account-circle-outline'
                    color={tintColor}
                    size={25}
                />
            )
        })
    }    
},
    {        
        initialRouteName: 'Exercise',
        tabBarOptions:{
            inactiveTintColor:'#A6A6A6',
            activeTintColor: '#FF8727' 
        }
    }
);

const LoginStack=createStackNavigator({
    Login:{
        screen:LoginScreenStacks
    }
},{
    headerMode:'none'
})

/* const NavigationApp=createStackNavigator({
    Auth:{  
        screen:LoginScreenStacks
    },
    App:{
        screen:MenuStack
    },
    AuthLoading: AuthLoadingScreen
},{
    headerMode:'none',
    initialRouteName:'Auth'
}) */

export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoading,
        App: MenuStack,
        Auth: LoginStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );

