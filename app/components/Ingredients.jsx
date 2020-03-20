import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

function Ingredients(props) {
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onLongPress={() => console.log('HEHEHE')}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://blog.regopantes.com/wp-content/uploads/2019/05/manfaat-wortel-resepkoki-id.jpg'
          }}
        />
        <Text style={styles.textInfo}>Ingredients</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 150,
    width: 160,
    backgroundColor: '#1DB954',
    borderRadius: 7,
    marginBottom: 10
  },
  image: {
    height: 120,
    width: 160
  },
  textInfo: {
    color: '#efefef',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4
  }
})

export default Ingredients
