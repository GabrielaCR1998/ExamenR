import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DiaScreen from '../Screens/DiaScreen';
import AleaScreen from '../Screens/AleaScreen';
import ConScreen from '../Screens/ConScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{headerShown:false, headerTitle:'Inicio'}}
            />
            <Stack.Screen name="DiaScreen" component={DiaScreen}/>
            <Stack.Screen name="AleaScreen" component={AleaScreen}/>
            <Stack.Screen name="ConScreen" component={ConScreen}/>
        </Stack.Navigator>

    )
}