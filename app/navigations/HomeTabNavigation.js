import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FridgeStackNavigation from './FridgeStackNavigator';
import FavouriteStackNavigation  from './FavouriteStackNavigation';


const Tab = createBottomTabNavigator()

export default function HomeTabNavigation () {
    return (
        <Tab.Navigator tabBarOptions= {{
            style : {
                backgroundColor : "#1DB954"
            },
            activeTintColor : "#EFEFEF"
        }}>
            <Tab.Screen name="Fridge" component={FridgeStackNavigation}/>
            <Tab.Screen name="Favourite" component={FavouriteStackNavigation}/>
        </Tab.Navigator>
    )
}