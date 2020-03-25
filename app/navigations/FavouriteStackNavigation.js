import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Favourites from '../screens/Favourites'
import FavRecipeDetails from '../screens/FavRecipeDetails'

const Stack = createStackNavigator()

export default function FavouriteStackNavigation () {
    return (
        <Stack.Navigator screenOptions= {{
            headerStyle : {
                backgroundColor : "#1DB954"
            },
            headerTintColor : "#EFEFEF"
        }}>
            <Stack.Screen name="Favourites" component={Favourites} options={{
                headerTitle : "Favourite Recipes",
                headerTitleStyle: {
                    fontFamily: "reem-kufi",
                    fontWeight: "200"
                  }
            }}/>
            <Stack.Screen name="FavRecipeDetails" component={FavRecipeDetails} options={{
                headerTitle : "Favourite Recipes",
                headerTitleStyle: {
                    fontFamily: "reem-kufi",
                    fontWeight: "200"
                  }
            }}/>
        </Stack.Navigator>
    )
}
