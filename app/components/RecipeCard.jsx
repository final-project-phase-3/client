import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import Styles from '../Styles'
import { useNavigation } from '@react-navigation/native'


export default RecipeDetails = props => {
    const {navigate} = useNavigation()

    return (
        <View style={Styles.RecipeCard}>
        <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={()=>navigate('FavRecipeDetails', {recipe : props.recipe})}>
            <ImageBackground
            blurRadius={3}
            source={{ uri: props.recipe.image }}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ borderRadius: 26 }}
            >
            <View style={Styles.RecipeCardView}>
                <Text style={Styles.RecipeCardText}>{props.recipe.title}</Text>
                <Text style={[Styles.RecipeCardText, { fontSize: 18 }]}>
                    Tap to see details
                </Text>
            </View>
            </ImageBackground>
        </TouchableOpacity>
        </View>
    )
}
