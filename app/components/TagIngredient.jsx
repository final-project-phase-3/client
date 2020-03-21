import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1DB954',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginHorizontal: 3
  },
  tagText: {
    fontSize: 10,
    color: '#EFEFEF',
    fontFamily: 'reem-kufi'
  }
})

export default function TagIngredient({ ingredientName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tagText}>{ingredientName}</Text>
    </View>
  )
}
