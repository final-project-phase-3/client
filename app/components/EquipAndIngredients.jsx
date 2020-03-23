import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'
import { TouchableHighlight } from 'react-native-gesture-handler'

function EquipAndIngredients(props){

    const [equipments, setEquipments] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [missingIngredients, setMissingIngreds] = useState([])
    
    const { recipe } = props
    console.log(props)
    

    useEffect(()=>{
        let equipTemp = []
        let ingredTemp = []
        let missingIngredsTemp = []
        recipe.cookingSteps.forEach( step => {
            equipTemp = equipTemp.concat( step.equipment.map( el => {
                return el.name
            }))
            const uniqueEquip = new Set(equipTemp)
            setEquipments([...uniqueEquip])
        })
        recipe.usedIngredients.forEach( ingredient => {
            ingredTemp.push(ingredient.original)
            setIngredients(ingredTemp)
        })
        recipe.missedIngredients.forEach( ingredient => {
            missingIngredsTemp.push(ingredient.original)
            setMissingIngreds(missingIngredsTemp)
        })
    },[])


    return(
        <View>
            <View style={{...Styles.RecipeEquipmentsCard}}>

            {/* cooking time */}
                <Text style={{fontSize : 20, fontFamily : 'reem-kufi', marginBottom : 5}}>Cooking time : { recipe.readyInMinutes} mins</Text>
            
            {/* equipments */}
            { equipments.length!==0 &&
                <>
                <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Equipments :</Text>
                <View style={{flexDirection : "row"}}>
                        <View style={{flex : 2}}>
                            {
                                equipments.map( equipment => {
                                    return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} {equipment} </Text>
                                })
                            }
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                        </View>
                </View>
                </>
            }

            {/* ingedients */}
            <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Ingredients :</Text>
            <View style={{flexDirection : "row"}}>
                <View style={{flex : 2}}>
                    {
                        ingredients.map( ingredient => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} {ingredient} </Text>
                        })
                    }
                    <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                </View>
                <View style={{flex : 1}}>
                    {
                        ingredients.map( ingredient => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}> {ingredient.amount} </Text>
                        })
                    } 
                </View>
            </View>
            
            {/* missing ingredients */}
            { missingIngredients.length!==0 && 
                <>
                <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Missing Ingredients :</Text>
                <View style={{flex : 2}}>
                    {
                        missingIngredients.map( ingredient => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} {ingredient} </Text>
                        })
                    }
                    <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                </View>
                </>
            }

            </View>
        </View>
    )
} 

export default EquipAndIngredients