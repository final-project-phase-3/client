import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import SideSwipe from 'react-native-sideswipe'
import LottieView from 'lottie-react-native'

import Styles from '../Styles'
import StepsCard from './StepsCard'
import { ScrollView } from 'react-native-gesture-handler'

function EquipAndIngredients(props){

    const [index, setIndex] = useState(0)
    const { width } = Dimensions.get('window')
    const contentOffset = (width - StepsCard.WIDTH)/2

    const { recipe } = props

    return(
        <>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            >
                <StepsCard/>
                <StepsCard/>
                <StepsCard/>
            </ScrollView>
        </>
    )
} 

export default EquipAndIngredients