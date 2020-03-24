import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigations/HomeTabNavigation'
import * as Font from 'expo-font'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'

import store from './store'
import client from './config/graphql'

export default function App() {
  const [fontReady,setFontReady] = useState(false)
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'reem-kufi': require('./assets/fonts/ReemKufi-Regular.ttf')
      })
      setFontReady(true);
    };
    loadFonts();
  }, [])

  return (
    <Provider store={store}>
      { fontReady && 
      <ApolloProvider client={client}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApolloProvider>
      }
    </Provider>
  )
}
