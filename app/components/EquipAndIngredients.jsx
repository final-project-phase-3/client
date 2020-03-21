import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'

function EquipAndIngredients(props){

    const { recipe } = props

    return(
        <View>
            <View style={{...Styles.RecipeEquipmentsCard}}>

            <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Equipments :</Text>
            <View style={{flexDirection : "row"}}>
                <View style={{flex : 2}}>
                    {
                        recipe.equipments.map( equipment => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} {equipment.name} </Text>
                        })
                    }
                    <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                </View>
                <View style={{flex : 1}}>
                    {
                        recipe.equipments.map( equipment => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}> {equipment.amount} </Text>
                        })
                    }
                </View>
            </View>

            <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Ingredients :</Text>
            <View style={{flexDirection : "row"}}>
                <View style={{flex : 2}}>
                    {
                        recipe.ingredients.map( ingredient => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} {ingredient.name} </Text>
                        })
                    }
                    <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                </View>
                <View style={{flex : 1}}>
                    {
                        recipe.ingredients.map( ingredient => {
                            return <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}> {ingredient.amount} </Text>
                        })
                    }
                </View>
            </View>

            </View>
        </View>
    )
} 

export default EquipAndIngredients