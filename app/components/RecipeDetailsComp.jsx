import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import Styles from '../Styles'
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler'

export default RecipeDetails = (props) => {

    const { recipe } = props

    return(
        <ImageBackground source={require('../assets/SearchBackground.png')} style={{width: '100%', height: '100%'}}>
            <View style={{alignItems : 'center', flex : 1}}>
                <View style={{flex : 0.75, width : '100%', marginBottom : 10}}>
                    <Text style={{...Styles.TitleText, marginTop : 10}}>{recipe.name}</Text>
                </View>
                <View style={{flex : 2.5, width : '100%', paddingHorizontal : 10, marginBottom : 10}}>
                    <Image borderRadius={24} source={{uri : recipe.url}} style={{height : '100%', width : '100%'}}></Image>
                </View>
                <View style={{flex : 4.5, width : '100%', paddingHorizontal : 10}}>
                    <ScrollView>
                        <View style={{...Styles.Shadows, width : '100%', backgroundColor : 'white', borderRadius : 24, marginVertical : 10, padding : 20}}>
                            <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Equipments :</Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Pan </Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Pot </Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Spatula </Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Stove </Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'}  </Text>
                            <Text style={{fontSize : 30, fontFamily : 'reem-kufi'}}>Ingredients : </Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Beef</Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Salt</Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Coconut Milk</Text>
                            <Text style={{fontSize : 20, fontFamily : 'reem-kufi'}}>{'\t'} {'\u2022'} Sweet Soy Sauce</Text>
                        </View>
                            <TouchableNativeFeedback>
                        <View style={{...Styles.Shadows, width : '100%', backgroundColor : 'white', borderRadius : 24, marginVertical : 10, padding : 20}}>
                                <Text>Start</Text>
                        </View>
                            </TouchableNativeFeedback>
                    </ScrollView>
                </View>
                
            </View>
        </ImageBackground>
    )
}