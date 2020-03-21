import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Ingredients from './Ingredients'

const RecipeDetails = props => {
  const ingredientsData = [
    {
      _id: 1,
      name: 'Carrot',
      image_url:
        'https://blog.regopantes.com/wp-content/uploads/2019/05/manfaat-wortel-resepkoki-id.jpg'
    },
    {
      _id: 2,
      name: 'Tomato',
      image_url:
        'https://lh3.googleusercontent.com/proxy/OnZv4mXfwIJ8DSWarqvrD4oS9IU1vNREeiIh3kXB7cJ_MReXtyxiqv7VYOX1vpQtK6KlccjAfcuPXTZhNjpgMt1MI01Cdliwqdb75wJCFRrY7ohwRw'
    },
    {
      _id: 3,
      name: 'Garlic',
      image_url: 'https://static.toiimg.com/photo/70173931.cms'
    },
    {
      _id: 4,
      name: 'Meat',
      image_url:
        'https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/20-Meat-Proteins-Chicken-Pork-Beef.jpg?itok=GNUSHSEs'
    }
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        {ingredientsData.map(ingredient => (
          <Ingredients key={ingredient._id} ingredient={ingredient} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})

export default RecipeDetails
