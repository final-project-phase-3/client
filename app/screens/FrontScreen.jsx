  import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  AsyncStorage,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native'
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as AppAuth from 'expo-app-auth'
import { useNavigation } from '@react-navigation/native'
import {useMutation} from '@apollo/react-hooks'
import {REGISTER,LOGIN} from '../graphql'

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#31B455',
    flex: 2,
    fontFamily:'reem-kufi'
  },
  top: {
    alignItems: 'center',
    flex: 1,
    paddingTop:StatusBar.currentHeight*2
  },
  bottom: {
    alignItems: 'center',
    flex: 2
  }
})

export default function FrontScreen() {
  const [FormLogin, setFormLogin] = useState(true)
  const [register] = useMutation(REGISTER)
  const [login] = useMutation(LOGIN)
  const { navigate } = useNavigation()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const handleChange = (type,value) => {
    switch (type) {
      case 'username':
        setUsername(value)
        break;
      case 'password':
        setPassword(value)
        break;
      case 'email':
        setEmail(value)
        break;
      default:
        break;
    }
  }
  useEffect(async() => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value){
        navigate('HomeScreen')
      }
    } catch (error) {
      
    }
  },[])
  const handleRegister = async () => {
    try {
      const response = await register({variables:{username,email,password}})
      console.log(response)
      await AsyncStorage.setItem('token', response.data.register.token);
      navigate('HomeScreen')
    } catch (error) {
      alert(error.graphQLErrors.map(({ message }, i) => {
        return message
      }))
    }
  }

  const handleLogin = async () => {
    try {
      const response = await login({variables:{input:email,password}})
      console.log(response)
      await AsyncStorage.setItem('token', response.data.login.token);
      navigate('HomeScreen')
    } catch (error) {
      alert(error.graphQLErrors.map(({ message }, i) => {
        return message
      }))
    }
  }

  const changeForm = () => {
    setFormLogin(state => !state)
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          resizeMode="contain"
          source={require('../assets/coolkas2.png')}
          style={{
            width: 200,
            height: 400,
            flex:1
          }}
        />
      </View>
      <KeyboardAvoidingView style={styles.bottom} behavior="padding" enabled >
        {
          !FormLogin &&
          <Input
          placeholder='username'
          label="Username"
          placeholderTextColor="white"
          labelStyle={{color:"white"}}
          value={username}
          onChangeText={(text) => handleChange('username',text)}
          containerStyle={{paddingHorizontal:50}}
          inputContainerStyle={{borderBottomColor:"white"}}
          inputStyle={{color:"white",paddingHorizontal:10}}
          leftIcon={{ type: 'font-awesome', name: 'user' ,color:'white',size:15 }}
          />
        }

        <Input
          placeholder='mail@mail.com'
          label="Email"
          placeholderTextColor="white"
          labelStyle={{color:"white"}}
          containerStyle={{paddingHorizontal:50}}
          inputContainerStyle={{borderBottomColor:"white"}}
          inputStyle={{color:"white",paddingHorizontal:10}}
          leftIcon={{ type: 'font-awesome', name: 'envelope' ,color:'white',size:15 }}
          value={email}
          onChangeText={(text) => handleChange('email',text)}
        />

        <Input
          placeholder='password'
          label="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          labelStyle={{color:"white"}}
          containerStyle={{paddingHorizontal:50,paddingVertical:10}}
          inputContainerStyle={{borderBottomColor:"white"}}
          inputStyle={{color:"white",paddingHorizontal:10}}
          leftIcon={{ type: 'font-awesome', name: 'lock',color:"white" }}
          value={password}
          onChangeText={(text) => handleChange('password',text)}
        />
        <TouchableOpacity
          onPress={async () => {
            FormLogin  ? handleLogin() : handleRegister()
          }}
        >
          <Text
            style={{
              backgroundColor: '#efefef',
              padding: 10,
              borderRadius: 8,
              marginTop:10
            }}
          >
            {FormLogin  ? "Sign In" : "Sign Up"}
          </Text>
        </TouchableOpacity>
        <View style={{alignSelf:"flex-end",paddingHorizontal:30}}>
          <TouchableOpacity
            onPress={() => {
                changeForm()
              }}
              >
            <Text
              style={{
                borderBottomWidth:1,
                color:"white", 
                width:"100%",
                borderBottomColor:"white"
              }}
              >
              {FormLogin  ? "Sign Up" : "Sign In"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
