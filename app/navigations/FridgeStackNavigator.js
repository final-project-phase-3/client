import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Camera from '../screens/Camera'
import Home from '../screens/Home'
import SearchResult from '../screens/SearchResult'
import RecipeDetails from '../screens/RecipeDetails'
import SearchBarResult from '../screens/SearchBarResult'

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
      <Stack.Screen name="SearchResult" component={SearchResult} options={{
        headerTitle : 'Search Results',
        headerTitleStyle: {
          fontFamily: 'reem-kufi',
          fontWeight: '200'
        }
      }} />
      <Stack.Screen name="SearchBarResult" component={SearchBarResult} options={{
        headerTitle : 'Search Results',
        headerTitleStyle: {
          fontFamily: 'reem-kufi',
          fontWeight: '200'
        }
      }}/>
      <Stack.Screen name="FavRecipeDetails" component={RecipeDetails} options={{
        headerTitle : "Favourite Recipes",
        headerTitleStyle: {
          fontFamily: 'reem-kufi',
          fontWeight: '200'
        }
      }} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
