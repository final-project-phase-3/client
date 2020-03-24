import React from 'react'
import { Alert } from 'react-native'
import RecipeDetailsComp from '../components/RecipeDetailsComp'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { View } from 'native-base'
import { useMutation } from '@apollo/react-hooks'
import { REMOVE_FAVOURITE, GET_FAV } from '../graphql'
import { Linking } from 'react-native'

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
    const text = 'coba dulu'
    Linking.openURL(`whatsapp://send?text=${text}&phone=6281223131600`)
  }

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginHorizontal: 10 }}>
          <TouchableNativeFeedback onPress={() => handleShare()}>
            <MaterialIcons
              name="share"
              style={{ fontSize: 30, color: 'white' }}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => handleDeleteFav()}>
            <MaterialIcons
              name="delete"
              style={{ fontSize: 30, color: 'white' }}
            />
          </TouchableNativeFeedback>
        </View>
      )
    })
  }, [props.navigation])

  return <RecipeDetailsComp recipe={params.recipe} />
}
