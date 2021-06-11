import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomePage } from '../modules';

import { Screen } from '../constants';


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();

function RootApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName={Screen.SPLASH_PAGE}>

                {/* Home Page */}
                <Stack.Screen name={Screen.HOME} component={HomePage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootApp;