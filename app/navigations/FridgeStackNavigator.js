import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Camera from '../screens/Camera'
import Home from '../screens/Home'
import SearchResult from '../screens/SearchResult'
import RecipeDetails from '../screens/RecipeDetails'

const Stack = createStackNavigator()

export default function FridgeStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1DB954'
        },
        headerTintColor: '#EFEFEF'
      }}
    >
      <Stack.Screen
        name="Fridge"
        options={{
          headerTitleStyle: {
            fontFamily: 'reem-kufi',
            fontWeight: '200'
          }
        }}
        component={Home}
      />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="FavRecipeDetails" component={RecipeDetails} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
