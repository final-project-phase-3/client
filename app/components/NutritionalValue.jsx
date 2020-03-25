import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'
import { TouchableHighlight } from 'react-native-gesture-handler'

function NutritionalValue(props){

    const [nutritions, setNutriritons] = useState([])
    const [nutritionsAmount, setNutriritonsAmount] = useState([])
    
    const { recipe } = props

    useEffect(()=>{
        let nutritionsTemp = []
        let nutritionsAmountTemp = []
        recipe.nutritions.forEach( nutrition => {
            const nutritionObject = {}
            nutritionsTemp.push(nutrition.title)
            nutritionObject.amount = nutrition.amount
            nutritionObject.unit = nutrition.unit
            nutritionsAmountTemp.push(nutritionObject)
        })
        setNutriritons(nutritionsTemp)
        setNutriritonsAmount(nutritionsAmountTemp)
    },[])
    
    return(
        <View>
            <View style={{...Styles.RecipeEquipmentsCard}}>

            {/* nutritions */}
            { nutritions.length!==0 &&
                <>
                <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Nutritions :</Text>
                <View style={{flexDirection : "row"}}>
                        <View style={{flex : 2}}>
                            {
                                nutritions.map( (nutrition, i) => {
                                    return <Text key={i} style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\u2022'} {nutrition} </Text>
                                })
                            }
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                        </View>
                        <View style={{flex : 1}}>
                            {
                                nutritionsAmount.map( (nutrition, i) => {
                                    return <Text key={i} style={{fontSize : 20, fontFamily : 'reem-kufi'}}> {nutrition.amount} {nutrition.unit} </Text>
                                })
                            }
                        </View>
                </View>
                </>
            }
            </View>
        </View>
    )
} 

export default NutritionalValue