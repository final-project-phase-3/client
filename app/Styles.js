import { StyleSheet } from "react-native"



export default StyleSheet.create({
    RecipeCard : {
        backgroundColor : "#1db954", 
        marginHorizontal : 10, 
        marginVertical: 10,
        borderRadius : 28, 
        height : 200, 
        justifyContent : "center", 
        alignItems : "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 7
    },
    RecipeCardView : {
        height : "100%", 
        width : '100%', 
        justifyContent : "center", 
        alignItems : "center"
    },
    RecipeCardText : {
        color : "#EFEFEF", 
        fontFamily : "reem-kufi", 
        fontSize : 30, 
        textAlign:"center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 5},
        textShadowRadius: 20
    },
    TitleText : {
        color : "#666565", 
        fontFamily : "reem-kufi", 
        fontSize : 35, 
        textAlign:"center",
        marginTop : '7%'
    },
    Shadows : {
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 7
    },

    RecipeEquipmentsCard:{
        width : '100%', 
        backgroundColor : 'white', 
        borderRadius : 24, 
        marginVertical : 10, 
        padding : 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 7
    }
})