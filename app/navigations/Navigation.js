import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ExercisesScreensStacks from './ExercisesScreensStacks'
import NutritionScreensStacks from './NutririonScreensStacks';
import MonitoringScreensStacks from './MonitoringScreensStack';
import AccountScreensStacks from './AccountScreensStacks';
import BluetoothConnectionStacks from './BluetoothConnectionStacks';

const NavigationStacks=createBottomTabNavigator({
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
    }
},
    {        
        initialRouteName: 'Bluetooth',
        tabBarOptions:{
            inactiveTintColor:'#A6A6A6',
            activeTintColor: '#FF8727' 
        }
    }
);

export default createAppContainer(NavigationStacks);