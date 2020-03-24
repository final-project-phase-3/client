import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FridgeStackNavigation from './FridgeStackNavigator'
import FavouriteStackNavigation from './FavouriteStackNavigation'
import { MaterialIcons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Fridge') {
            iconName = focused ? 'restaurant-menu' : 'menu'
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'star-border' : 'star'
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        inactiveBackgroundColor: '#efefef',
        activeBackgroundColor: '#1DB954',
        activeTintColor: '#efefef',
        inactiveTintColor: '#1DB954'
      }}
    >
      <Tab.Screen name="Fridge" component={FridgeStackNavigation} />
      <Tab.Screen name="Favourite" component={FavouriteStackNavigation} />
    </Tab.Navigator>
  )
}
