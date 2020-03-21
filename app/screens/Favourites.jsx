import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Animated,
  Easing
} from 'react-native'
import RecipeCard from '../components/RecipeCard'
import Styles from '../Styles'
import LottieView from 'lottie-react-native'
import recipesMockup from '../recipesMockup'

export default RecipeDetails = props => {
    const favouriteList = recipesMockup()
    
    const [favourites, setFavourites] = useState(favouriteList)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })
    
    
    if(loading) return <LottieView source={require('../assets/animations/loadingAnimation.json')} autoPlay loop/>
    
    else return(
        <ImageBackground source={require('../assets/SearchBackground.png')} style={{width: '100%', height: '100%'}}>
            <View style={{flex : 1}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={{flex:1}}>
                        <View style={{alignItems : 'center', justifyContent : "center"}}>
                            <Text style={Styles.TitleText}>❤️ Your favourites!</Text>
                        </View>
                        {
                            favourites.map(recipe => {
                                return (
                                    <RecipeCard recipe={recipe}/>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
      </ImageBackground>
    )
}
