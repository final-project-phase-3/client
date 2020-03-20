import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import ResultRecipeCard from '../components/RecipeCard'

export default RecipeDetails = (props) => {
    

    return(
        <ImageBackground source={require('../assets/SearchBackground.png')} style={{width: '100%', height: '100%'}}>
            <ResultRecipeCard/>
            <ResultRecipeCard/>
            <ResultRecipeCard/>
        </ImageBackground>
    )
}