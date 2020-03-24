import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeTabNavigation from './HomeTabNavigation'
import FrontScreen from '../screens/FrontScreen'

const Stack = createStackNavigator()

export default function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={FrontScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
