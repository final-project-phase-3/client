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
import { useSelector } from 'react-redux'

import Fridge from '../components/Fridge'
import RecipesCarousel from '../components/RecipesCarousel'

function Home() {
  const { navigate } = useNavigation()
  const { chosenIngredients } = useSelector(state => {
    return state.ingredientsReducers
  })

  const handleSearch = () => {
    if (chosenIngredients.length < 1) {
      alert('Please select your ingredients to get recipes recommendation')
    } else {
      navigate('SearchResult')
    }
  }

  return (
    <ImageBackground
      source={require('../assets/home-bg.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View>
        <RecipesCarousel />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.headContainer}>
          <Text style={[styles.textTitle]}>Your Ingredients</Text>
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
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9
        }}
        onPress={() => {
          handleSearch()
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
    height: Dimensions.get('window').height,
    marginTop: 30
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#666565',
    fontFamily: 'reem-kufi'
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
    fontSize: 16,
    fontFamily: 'reem-kufi'
  }
})

export default Home
