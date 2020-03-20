import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button'

import Fridge from '../components/Fridge'

function Home() {
  const [chosenIngredients, setChosen] = useState([])
  const { navigate } = useNavigation()

  return (
    <ImageBackground
      source={require('../assets/home-bg.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.textTitle}>Your Ingredients</Text>
          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={() => navigate('Camera')}
          >
            <Ionicons name="ios-camera" size={24} color="#efefef" />
            <Text style={styles.textBtn}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Fridge />
        </View>
      </View>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {
          console.log('hi')
        }}
        renderIcon={() => (
          <Ionicons name="ios-search" size={20} color="#efefef" />
        )}
      ></ActionButton>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: 'column'
  },
  headContainer: {
    flex: 0.25,
    alignItems: 'center',
    marginTop: 5
  },
  contentContainer: {
    flex: 1.75,
    width: '100%',
    padding: 10,
    height: Dimensions.get('window').height
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666565'
  },
  uploadBtn: {
    flexDirection: 'row',
    backgroundColor: '#1DB954',
    width: 150,
    justifyContent: 'center',
    color: '#EFEFEF',
    letterSpacing: 2,
    fontSize: 14,
    padding: 5,
    borderRadius: 10,
    marginTop: 10
  },
  textBtn: {
    marginLeft: 6,
    color: '#efefef',
    fontSize: 16
  }
})

export default Home
