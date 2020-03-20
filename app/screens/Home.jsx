import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Camera from '../components/Camera'

function Home() {
  const [chosenIngredients, setChosen] = useState([])

  return (
    <View>
      <Camera />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
