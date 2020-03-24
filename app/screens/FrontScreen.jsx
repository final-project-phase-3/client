  import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as AppAuth from 'expo-app-auth'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#31B455',
    flex: 2,
    justifyContent: 'center'
  },
  top: {
    alignItems: 'center',
    flex: 1,
    marginTop: 150
  },
  bottom: {
    marginTop: 40,
    alignItems: 'center',
    flex: 1
  }
})

export default function FrontScreen() {
  let [authState, setAuthState] = useState(null)
  const { navigate } = useNavigation()

  useEffect(() => {
    ;(async () => {
      let cachedAuth = await getCachedAuthAsync()
      console.log(cachedAuth)
      if (cachedAuth && !authState) {
        setAuthState(cachedAuth)
      }
    })()
  }, [])

  useEffect(() => {
    if (authState) navigate('HomeScreen')
  }, [authState])

  onPress = () => {
    //   this.signInAsync()
    // navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('../assets/coolkas2.png')}
          style={{
            width: 200,
            height: 300
          }}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={async () => {
            const authState = await signInAsync()
            setAuthState(authState)
          }}
        >
          <Text
            style={{
              backgroundColor: '#efefef',
              padding: 10,
              borderRadius: 8
            }}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

let config = {
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com'
}

let StorageKey = '@MyApp:CustomGoogleOAuthKey'

export async function signInAsync() {
  let authState = await AppAuth.authAsync(config)
  await cacheAuthAsync(authState)
  console.log('signInAsync', authState)
  return authState
}

async function cacheAuthAsync(authState) {
  return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState))
}

export async function getCachedAuthAsync() {
  let value = await AsyncStorage.getItem(StorageKey)
  let authState = JSON.parse(value)
  //   console.log('getCachedAuthAsync', authState)
  if (authState) {
    if (checkIfTokenExpired(authState)) {
      return refreshAuthAsync(authState)
    } else {
      return authState
    }
  }
  return null
}

function checkIfTokenExpired({ accessTokenExpirationDate }) {
  return new Date(accessTokenExpirationDate) < new Date()
}

async function refreshAuthAsync({ refreshToken }) {
  let authState = await AppAuth.refreshAsync(config, refreshToken)
  console.log('refreshAuth', authState)
  await cacheAuthAsync(authState)
  return authState
}

export async function signOutAsync({ accessToken }) {
  try {
    await AppAuth.revokeAsync(config, {
      token: accessToken,
      isClientIdProvided: true
    })
    await AsyncStorage.removeItem(StorageKey)
    return null
  } catch (e) {
    alert(`Failed to revoke token: ${e.message}`)
  }
}
