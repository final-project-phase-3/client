import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native'
import { useQuery } from '@apollo/react-hooks'

import Styles from '../Styles'
import RecipeCard from './RecipeCard'
import { GET_RANDOM_RECIPES } from '../graphql'

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#666565',
    fontFamily: 'reem-kufi'
  }
})

export default function RecipesCarousel() {
  const { data, loading, error } = useQuery(GET_RANDOM_RECIPES)

  if (loading) {
    return (
      <View>
        <Text
          style={[
            styles.textTitle,
            { textAlign: 'center', marginVertical: 10 }
          ]}
        >
          Recipes Recommendation
        </Text>
        <View style={Styles.RecipeCard}>
          <ImageBackground
            blurRadius={1}
            source={require('../assets/food-dummy.jpg')}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ borderRadius: 26 }}
          >
            <View style={Styles.RecipeCardView}>
              <Text style={[Styles.RecipeCardText, { fontSize: 18 }]}>
                Fetching your today recommendations
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text
          style={[
            styles.textTitle,
            { textAlign: 'center', marginVertical: 10 }
          ]}
        >
          Recipes Recommendation
        </Text>
        <View style={Styles.RecipeCard}>
          <ImageBackground
            blurRadius={1}
            source={require('../assets/broken-recipe.jpeg')}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ borderRadius: 26 }}
          >
            <View style={Styles.RecipeCardView}>
              <Text style={[Styles.RecipeCardText, { fontSize: 18 }]}>
                Ooops, there are some error in our services.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  }

  if (data) {
    return (
      <View>
        <Text
          style={[
            styles.textTitle,
            { textAlign: 'center', marginVertical: 10 }
          ]}
        >
          Recipes Recommendation
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.getRandomRecipes.map((recipe, i) => (
            <View
              key={i}
              style={{
                width: Dimensions.get('window').width - 70,
                height: 200
              }}
            >
              <RecipeCard key={recipe._id} recipe={recipe} />
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
