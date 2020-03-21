import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Favourites from '../screens/Favourites'

const Stack = createStackNavigator()

<<<<<<< HEAD
export default function FavouriteStackNavigation() {
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
        name="Favourites"
        component={Favourites}
        options={{
          headerTitleStyle: {
            fontFamily: 'reem-kufi',
            fontWeight: '200'
          }
        }}
      />
    </Stack.Navigator>
  )
}
=======
export default function FavouriteStackNavigation () {
    return (
        <Stack.Navigator screenOptions= {{
            headerStyle : {
                backgroundColor : "#1DB954"
            },
            headerTintColor : "#EFEFEF"
        }}>
            <Stack.Screen name="Favourites" component={Favourites} options={{
                headerTitleStyle: {
                    fontFamily: "reem-kufi",
                    fontWeight: "200"
                  }
            }}/>
            <Stack.Screen name="FavRecipeDetails" component={FavRecipeDetails} options={{
                headerTitleStyle: {
                    fontFamily: "reem-kufi",
                    fontWeight: "200"
                  }
            }}/>
        </Stack.Navigator>
    )
}
>>>>>>> Detail page almost done
