import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import Styles from '../Styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import EquipAndIngredients from '../components/EquipAndIngredients'
import StartCookingButton from '../components/StartCookingButton'
import CookingStepButton from '../components/CookingStepButton'
import CookingSteps from '../components/CookingSteps'

export default RecipeDetails = props => {
  const { recipe } = props

  const [isStarted, setIsStarted] = useState(false)

  function handleClickStart() {
    setIsStarted(!isStarted)
  }

  useEffect(() => {
    console.log(isStarted)
  }, [isStarted])

  return (
    <ImageBackground
      source={require('../assets/SearchBackground.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={{ alignItems: 'center', flex: 1 }}>
        <View style={{ flex: 0.75, width: '100%', marginBottom: 10 }}>
          <Text style={{ ...Styles.TitleText, marginTop: 10 }}>
            {recipe.title}
          </Text>
        </View>
        <View
          style={{
            flex: 2.5,
            width: '100%',
            paddingHorizontal: 10,
            marginBottom: 10
          }}
        >
          <Image
            borderRadius={24}
            source={{ uri: recipe.image }}
            style={{ height: '100%', width: '100%' }}
          ></Image>
        </View>
        <View style={{ flex: 4.5, width: '100%', paddingHorizontal: 10 }}>
          <ScrollView>
            {!isStarted && (
              <>
                <EquipAndIngredients recipe={recipe} />
                <StartCookingButton handleClickStart={handleClickStart} />
              </>
            )}
            {isStarted && (
              <>
                <CookingSteps recipe={recipe} />
                <CookingStepButton handleClickStart={handleClickStart} />
              </>
            )}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  )
}
