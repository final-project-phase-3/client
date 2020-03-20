import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './navigations/HomeTabNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TabNavigator />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
