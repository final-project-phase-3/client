import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Ingredients from './Ingredients'

const RecipeDetails = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Ingredients />
        <Ingredients />
        <Ingredients />
        <Ingredients />
        <Ingredients />
        <Ingredients />
        <Ingredients />
        <Ingredients />
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
