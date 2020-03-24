import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'react-native-elements'

import { addChosen, removeChosen } from '../store/actions/ingredientActions'

function Ingredients({ ingredient }) {
  const dispatch = useDispatch()
  const { chosenIngredients } = useSelector(state => {
    return state.ingredientsReducers
  })
  const ingredientIndex = chosenIngredients.findIndex(
    ing => ing._id === ingredient._id
  )

  const handleSelect = () => {
    if (ingredientIndex > -1) {
      dispatch(removeChosen(ingredient))
    } else {
      dispatch(addChosen(ingredient))
    }
  }

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => handleSelect()}>
        <Image
          style={[styles.image, ingredientIndex > -1 && { opacity: 0.5 }]}
          source={{
            uri: ingredient.image_url
          }}
          PlaceholderContent={<ActivityIndicator size="small" color="white" />}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={styles.textInfo}>{ingredient.name}</Text>
          {ingredientIndex > -1 && (
            <Ionicons
              name="ios-checkmark-circle"
              size={18}
              color="#efefef"
              style={{ marginLeft: 5 }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 150,
    width: 160,
    backgroundColor: '#1DB954',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7
  },
  image: {
    height: 120,
    width: 160
    // opacity: 0.2
  },
  textInfo: {
    color: '#efefef',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '200',
    marginTop: 4,
    fontFamily: 'reem-kufi'
  }
})

export default Ingredients
