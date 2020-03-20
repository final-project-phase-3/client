import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './navigations/HomeTabNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
