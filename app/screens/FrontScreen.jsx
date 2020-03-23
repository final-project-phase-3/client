import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native'
import * as GoogleSignIn from 'expo-google-sign-in'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as AppAuth from 'expo-app-auth'

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
  const [user, setUser] = useState(null)
  const { URLSchemes } = AppAuth

  useEffect(() => {
    initAsync()
  }, [])

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId:
        '282178072248-ogfds717vqnbaim9blo3lucr4bdqefur.apps.googleusercontent.com'
    })
    this._syncUserWithStateAsync()
  }

  console.log(AppAuth)

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync()
    setUser(user)
  }

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync()
    setUser(null)
  }

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync()
      const { type, user } = await GoogleSignIn.signInAsync()
      if (type === 'success') {
        this._syncUserWithStateAsync()
      }
    } catch ({ message }) {
      alert('login: Error:' + message)
    }
  }

  onPress = () => {
    if (user) {
      this.signOutAsync()
    } else {
      this.signInAsync()
    }
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
        <Text>{JSON.stringify(URLSchemes)}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => onPress()}>
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
