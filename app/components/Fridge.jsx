import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import LottieView from 'lottie-react-native'
import Ingredients from './Ingredients'
import { GET_USER } from '../graphql'

const RecipeDetails = props => {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) {
    return (
      <View style={styles.outerLayer}>
        <View style={styles.innerLayer}>
          <LottieView
            source={require('../assets/animations/loadingAnimation.json')}
            autoPlay
            loop
          />
          <Text style={{ marginTop: 400, textAlign: 'center' }}>
            Preparing your ingredients ...
          </Text>
        </View>
      </View>
    )
  } else if(error){
    console.log('---------------',error,'--------------------------')
    return(
      <View>
        <Text>{error}</Text>
      </View>
    )
  } else {
    return (
        <View style={styles.container}>
          {data.getUser.refrigerator.map(ingredient => (
            <Ingredients key={ingredient._id} ingredient={ingredient} />
            ))}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})

export default RecipeDetails
