import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator  from './navigations/HomeTabNavigation';
import * as Font from 'expo-font'

export default function App() {

  useEffect(()=>{
    Font.loadAsync({
      'reem-kufi' : require('./assets/fonts/ReemKufi-Regular.ttf')
    })
  },[])

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
