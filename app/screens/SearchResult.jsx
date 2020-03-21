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

export default SearchResult = props => {
  const { chosenIngredients } = useSelector(state => {
    return state
  })

  const favouriteList = [
    {
      name: 'Beef Rendang',
      url:
        'https://s3media.freemalaysiatoday.com/wp-content/uploads/2019/06/rendang-lifestyle-020619-1.jpg'
    },
    {
      name: 'Chicken Opor',
      url:
        'https://cdn2.tstatic.net/palu/foto/bank/images/opor-ayam-lezat-untuk-sajian-lebaran.jpg'
    },
    {
      name: 'Spaghetti Bolognese',
      url:
        'https://thecozyapron.com/wp-content/uploads/2019/05/spaghetti-bolognese_thecozyapron_1.jpg'
    },
    {
      name: 'Sayur Asem',
      url:
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/25/968568/670x335/5-cara-masak-sayur-asem-yang-enak-segar-dan-mudah-ala-sunda-betawi-serta-jawa-rev-1.jpg'
    }
  ]

  const [favourites, setFavourites] = useState(favouriteList)
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
