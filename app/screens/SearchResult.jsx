import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'

import RecipeCard from '../components/RecipeCard'
import TagIngredient from '../components/TagIngredient'
import recipesMockup from '../recipesMockup'

export default SearchResult = props => {
  const { chosenIngredients } = useSelector(state => {
    return state
  })

  const [favourites, setFavourites] = useState(recipesMockup())
  return (
    <ImageBackground
      source={require('../assets/SearchBackground.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={{ marginBottom: 5 }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 24,
            fontFamily: 'reem-kufi',
            color: '#666565'
          }}
        >
          Amazing recipes found
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          {chosenIngredients.map(ingredient => (
            <TagIngredient
              key={ingredient._id}
              ingredientName={ingredient.name}
            />
          ))}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            {favourites.map(recipe => {
              return <RecipeCard recipe={recipe} />
            })}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
