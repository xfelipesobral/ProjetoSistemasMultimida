import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// @ Cria navegação
const AppStack = createStackNavigator();

// @ Importa telas~
import Master from './paginas/Master';

export default function Routes() {

    StatusBar.setBarStyle('dark-content')

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ { headerShown: false } } > 
                
                <AppStack.Screen name='Master' component={Master} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
};
