import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import LottieView from 'lottie-react-native'

import RecipeCard from '../components/RecipeCard'
import TagIngredient from '../components/TagIngredient'
import recipesMockup from '../recipesMockup'
import { GET_RECIPES_NAME } from '../graphql/index'

export default SearchResult = props => {
  const { chosenIngredients } = useSelector(state => {
    return state.ingredientsReducers
  })
  const [error,setError] = useState(false)
  const { data,loading } = useQuery(GET_RECIPES_NAME, {
    variables: {
      ingredients: chosenIngredients.map(el => el.name)
    },
    onError: () => {
      setError(true)
    }
  })

  // if(!loading){
  //   console.log(data, 'ini data ----------->>>')
  //   console.log(error, 'ini error -----------|||')
  // }

  const [favourites, setFavourites] = useState(recipesMockup())
  if (data&&!loading)
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
              {data.getRecipes.map(recipe => {
                return <RecipeCard key={recipe._id} recipe={recipe} />
              })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    )
  else if (error) {
    console.log(error, 'ini errrrrrrrrrrrrrr')
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
            <LottieView
              source={require('../assets/animations/errorAnimation.json')}
              autoPlay
              loop
            />
            <Text style={{ marginTop: 400, textAlign: 'center' }}>
              Oh no, something went wrong ...
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  } else
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
            <LottieView
              source={require('../assets/animations/recipeSearchingAnimation.json')}
              autoPlay
              loop
            />
            <Text style={{ marginTop: 400, textAlign: 'center' }}>
              Finding your recipes ...
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  outerLayer: {
    backgroundColor: '#1DB954',
    height: '100%',
    position: 'relative'
  },
  innerLayer: {
    flex: 2,
    backgroundColor: '#EFEFEF',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    padding: 30
  },
  baseButton: {
    textAlign: 'center',
    padding: 5,
    color: '#EFEFEF',
    marginHorizontal: 5,
    fontFamily: 'reem-kufi',
    borderRadius: 5
  },
  confirmText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    color: '#1DB954',
    fontFamily: 'reem-kufi'
  }
})
