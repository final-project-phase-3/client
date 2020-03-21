import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function Ingredients(props) {
  const [status, setStatus] = useState(false)
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => setStatus(!status)}>
        <Image
          style={[styles.image, status && { opacity: 0.5 }]}
          source={{
            uri:
              'https://blog.regopantes.com/wp-content/uploads/2019/05/manfaat-wortel-resepkoki-id.jpg'
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={styles.textInfo}>Ingredients</Text>
          {status && (
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
    fontWeight: '700',
    marginTop: 4
  }
})

export default Ingredients
