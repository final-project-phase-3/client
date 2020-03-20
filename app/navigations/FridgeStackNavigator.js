import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Camera from '../components/Camera'
import Fridge from '../components/Fridge'
import SearchResult from '../screens/SearchResult'
import RecipeDetails from '../screens/RecipeDetails'


const Stack = createStackNavigator()

export default function FridgeStackNavigation () {
    return (
        <Stack.Navigator screenOptions= {{
            headerStyle : {
                backgroundColor : "#1DB954"
            },
            headerTintColor : "#EFEFEF"
        }}>
            <Stack.Screen name="Fridge" component={Fridge}/>
            <Stack.Screen name="SearchResult" component={SearchResult}/>
            <Stack.Screen name="RecipeDetails" component={RecipeDetails}/>
            <Stack.Screen name="Camera" component={Camera}/>
        </Stack.Navigator>
    )
}