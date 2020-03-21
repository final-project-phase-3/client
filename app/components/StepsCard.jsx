import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Styles from '../Styles'

function StepsCard(props){

    return(
        <View style={{...Styles.RecipeEquipmentsCard, maxWidth:'100%', padding : 40}}>
            <Text style={{fontSize : 20, fontFamily : 'reem-kufi', marginBottom : 10}}>
                Step 1.
            </Text>
            <Text style={{fontSize : 18, fontFamily : 'reem-kufi'}}>
                Cincang semua bahan bumbu halus kemudian blender sampai halus.
                Jika perlu tambahkan sekitar 50 ml santan untuk mempermudah proses penghancuran.
            </Text>
        </View>
    )
} 

export default StepsCard