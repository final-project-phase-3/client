import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import Styles from '../Styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LottieView from 'lottie-react-native'

import EquipAndIngredients from '../components/EquipAndIngredients'
import StartCookingButton from '../components/StartCookingButton'
import CookingStepButton from '../components/CookingStepButton'
import CookingSteps from '../components/CookingSteps'
import NutritionalValue from './NutritionalValue'

export default RecipeDetails = props => {
  const { recipe } = props

    const [isStarted, setIsStarted] = useState(false)
    const [showingNutrition, setShowingNutrition] = useState(false)
    const [animate, setAnimate] = useState(false)

    function handleClickStart(){
        setIsStarted(!isStarted)
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 1500);
    }

    function handleClickNutrition(){
        setShowingNutrition(!showingNutrition)
        console.log(showingNutrition)
    }

    useEffect(()=>{
        return ()=>{
            setIsStarted(!isStarted)
        }
    },[isStarted])



    return(
        <ImageBackground source={require('../assets/SearchBackground.png')} style={{width: '100%', height: '100%'}}>
            <View style={{alignItems : 'center', flex : 1}}>
                <View style={{width : '100%', marginBottom : 10}}>
                    <Text style={{...Styles.TitleText, marginTop : 10}}>{recipe.title}</Text>
                </View>
                <View style={{flex : 2.5, width : '100%', paddingHorizontal : 10, marginBottom : 10}}>
                    <Image borderRadius={24} source={{uri : recipe.image}} style={{height : '100%', width : '100%'}}></Image>
                </View>
                <View style={{flex : 4.5, width : '100%', paddingHorizontal : 10}}>
                    <ScrollView>
                        
                        { !isStarted && !showingNutrition &&
                            <>
                                <EquipAndIngredients recipe={ recipe }/>
                                <StartCookingButton handleClickStart={handleClickStart}/>
                            </>
                        }
                        { !isStarted && showingNutrition &&
                            <>
                                <NutritionalValue recipe={ recipe }/>
                            </>
                        }
                        { isStarted &&
                            <>
                                <CookingSteps recipe={ recipe }/>
                                <CookingStepButton handleClickStart={handleClickStart}/>
                                { animate &&
                                    <LottieView source={require('../assets/animations/swipeAnimation.json')} autoPlay loop/>
                                }
                            </>
                        }
                    </ScrollView>
                </View>
                {!isStarted && 
                    <View style={Styles.nutritionalValueButton}>
                        <TouchableOpacity onPress={handleClickNutrition}>
                            { !showingNutrition && <Text style={{...Styles.TitleText, color : "white", fontSize : 12}}>Nutritional Values</Text>}
                            { showingNutrition && <Text style={{...Styles.TitleText, color : "white", fontSize : 12}}>Recipe</Text>}
                        </TouchableOpacity>
                    </View>
                }
                
                
            </View>
        </ImageBackground>
    )
}
