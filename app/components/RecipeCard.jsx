import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import Styles from '../Styles'

export default RecipeDetails = (props) => {

    return(
        <View style={Styles.RecipeCard} >
            <TouchableOpacity style={{height : "100%", width : '100%'}}>
                <ImageBackground blurRadius={3} source={require('../assets/rendang.jpg')} style={{width: '100%', height: '107%'}} imageStyle={{borderRadius : 26}}>
                    <View style={{height : "100%", width : '100%', justifyContent : "center", alignItems : "center"}} >
                        <Text style={{color : "#EFEFEF"}}>APPLE STRUDLES</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}