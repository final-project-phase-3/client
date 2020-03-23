import React from 'react'
import { View, 
    Text } from 'react-native'
import Styles from '../Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

function StartCookingButton(props) {

    return(
        <View style={{flexDirection : 'row'}}>
            <View style={{...Styles.Shadows, 
                flex : 1, 
                margin : 5, 
                width : '100%', 
                backgroundColor : '#1db954', 
                borderRadius : 24, 
                marginVertical : 10, 
                padding : 20}}>
                    <TouchableOpacity style={{width : '100%', 
                    hegihnt : "100%"}} 
                    onPress={()=>props.handleClickStart()}>
                        <View style={{flex :1, 
                            alignItems : "center", 
                            justifyContent : 'center'}}>
                            <Text style={{...Styles.TitleText, 
                                marginTop : 0, 
                                fontSize : 30, 
                                color : "#efefef"}}>Prev
                            </Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <View style={{...Styles.Shadows, 
                flex : 1, 
                margin : 5, 
                width : '100%', 
                backgroundColor : '#1db954', 
                borderRadius : 24, 
                marginVertical : 10, 
                padding : 20}}>

                <TouchableOpacity style={{width : '100%', 
                hegihnt : "100%"}} 
                onPress={()=>props.handleClickStart()}>
                    <View style={{flex :1, 
                        alignItems : "center", 
                        justifyContent : 'center'}}>
                            <Text style={{...Styles.TitleText, 
                                marginTop : 0, 
                                fontSize : 30, 
                                color : "#efefef"}}>
                                    <Ionicons name="ios-camera" size={40} color="#efefef" />
                            </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartCookingButton