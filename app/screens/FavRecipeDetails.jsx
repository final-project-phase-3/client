import React from 'react'
import { Alert } from 'react-native'
import RecipeDetailsComp from '../components/RecipeDetailsComp'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { View } from 'native-base'
import { useMutation } from '@apollo/react-hooks'
import { REMOVE_FAVOURITE, GET_FAV } from '../graphql'
import { Linking } from 'expo'

export default RecipeDetailScreen = props => {
  const { params } = props.route

  const [removeFavourite] = useMutation(REMOVE_FAVOURITE, {
    refetchQueries: [{ query: GET_FAV }]
  })

  function handleDeleteFav() {
    Alert.alert(
      'Delete ' + params.recipe.title + '?',
      '',
      [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: async () => {
            console.log('masuk sini')
            const response = await removeFavourite({
              variables: {
                idAPI: params.recipe.idAPI
              }
            })
            if (response) {
              Alert.alert(
                `${response.data.removeFromFav.title} is deleted!`,
                '',
                [
                  {
                    text: 'OK',
                    onPress: () => props.navigation.navigate('Favourites')
                  }
                ],
                { cancelable: false }
              )
            }
          }
        }
      ],
      { cancelable: true }
    )
  }

  function handleShare() {
    const msg = params.recipe
    const text = encodeURI(
      'Hey, I scanned my fridge with AI and got this recipe!\n\n' +
      `*${msg.title}*\n\n` +
      `Cooking Time :\n${msg.readyInMinutes} minutes\n\n` +
      `Ingredients used : \n${msg.usedIngredients.map(el => {
          return `- ${el.original}`
        }).concat(msg.missedIngredients.map(el1 => {
          return `- ${el1.original}`
        })).join('\n')}\n\n`+
        `Cooking Steps :\n${msg.cookingSteps.map((el,i) => {
          return `${i + 1}. ${el.step}`
      }).join(`\n\n`)}`
    )
    
    Linking.openURL(`whatsapp://send?text=${text}`)
  }

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginHorizontal: 10, flexDirection : 'row', marginHorizontal : 10 }}>
          <TouchableNativeFeedback onPress={() => handleShare()}>
            <MaterialIcons
              name="share"
              style={{ fontSize: 30, color: 'white', marginHorizontal : 10 }}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => handleDeleteFav()}>
            <MaterialIcons
              name="delete"
              style={{ fontSize: 30, color: 'white', marginHorizontal : 10 }}
            />
          </TouchableNativeFeedback>
        </View>
      )
    })
  }, [props.navigation])

  return <RecipeDetailsComp recipe={params.recipe} />
}
