import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigations/HomeTabNavigation'
import * as Font from 'expo-font'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'

import store from './store'
import client from './config/graphql'

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'reem-kufi': require('./assets/fonts/ReemKufi-Regular.ttf')
    })
  }, [])

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  )
}
