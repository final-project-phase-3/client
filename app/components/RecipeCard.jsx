import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import Styles from '../Styles'
import { useNavigation } from '@react-navigation/native'

<<<<<<< HEAD
export default RecipeDetails = props => {
  return (
    <View style={Styles.RecipeCard}>
      <TouchableOpacity style={{ height: '100%', width: '100%' }}>
        <ImageBackground
          blurRadius={3}
          source={{ uri: props.recipe.url }}
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ borderRadius: 26 }}
        >
          <View style={Styles.RecipeCardView}>
            <Text style={Styles.RecipeCardText}>{props.recipe.name}</Text>
            <Text style={[Styles.RecipeCardText, { fontSize: 18 }]}>
              Click to see details
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}
=======
export default RecipeDetails = (props) => {

    const {navigate} = useNavigation()

    return(
        <View style={Styles.RecipeCard} >
            <TouchableOpacity onPress={()=>navigate('FavRecipeDetails', {recipe : props.recipe})} style={{height : "100%", width : '100%'}}>
                <ImageBackground blurRadius={3} source={{uri : props.recipe.url}} style={{width: '100%', height: '100%'}} imageStyle={{borderRadius : 26}}>
                    <View style={Styles.RecipeCardView} >
                        <Text style={Styles.RecipeCardText}>{props.recipe.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
>>>>>>> Detail page almost done
