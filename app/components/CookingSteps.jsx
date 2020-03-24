import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'
import SideSwipe from 'react-native-sideswipe'
import LottieView from 'lottie-react-native'

import Styles from '../Styles'
import StepsCard from './StepsCard'
import { ScrollView } from 'react-native-gesture-handler'

function EquipAndIngredients(props){

    const [steps, setSteps] = useState([])

    const { recipe } = props

    useEffect(()=>{
        let stepsTemp = []
        recipe.cookingSteps.forEach( step => {
            if(step.step!==''){
                stepsTemp.push(step.step)
            }
            setSteps(stepsTemp)
            console.log(steps.length)
        })
    },[])

    return(
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            >
                {
                    steps.map( (step, i) => {
                        return <StepsCard key={i} step={step} index={i}/>
                    })
                }
            </ScrollView>
    )
} 

export default EquipAndIngredients