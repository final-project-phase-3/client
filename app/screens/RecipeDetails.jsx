import React from 'react'
import RecipeDetailsComp from '../components/RecipeDetailsComp'
import { View } from 'native-base';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'
import { useMutation } from '@apollo/react-hooks';
import { ADD_TO_FAVOURITE, GET_FAV } from '../graphql';

export default RecipeDetailScreen = ({route, navigation}) => {
  const recipe = route.params.recipe

  const [addToFav, {data, error, loading}] = useMutation(ADD_TO_FAVOURITE, {
    refetchQueries : [
      {
        query : GET_FAV
      }
    ]
  })

  function handleAddToFav(){
    const favRecipe = {
      idAPI : String(recipe.id),
      title : recipe.title,
      image : recipe.image,
      usedIngredients : recipe.usedIngredients || [],
      missedIngredients : recipe.missedIngredients || [],
      nutritions : recipe.nutritions,
      cookingSteps : recipe.cookingSteps,
      readyInMinutes : recipe.readyInMinutes
    }
    addToFav({
      variables: favRecipe
    })
    alert('Added to favourites!')
  }

  if(!loading){
    console.log('ini data', data)
    console.log('ini error', error)
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{marginHorizontal : 10}}>
          <TouchableNativeFeedback onPress={()=>handleAddToFav()}>
            <MaterialIcons name="star" style={{ fontSize : 30, color : 'white'}}/>
          </TouchableNativeFeedback>
        </View>
      ),
    });
  }, [navigation]);

  return <RecipeDetailsComp recipe={recipe} />
}
