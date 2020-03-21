import React from 'react'
import RecipeDetailsComp from '../components/RecipeDetailsComp'


export default RecipeDetailScreen = (props) => {

    const { params } = props.route

    return(
<<<<<<< HEAD:app/screens/RecipeDetails.jsx
        <View>
            <Text>INI DETAIL RESEP</Text>
        </View>
=======
        <RecipeDetailsComp recipe = {params.recipe}/>
>>>>>>> Detail page almost done:app/screens/FavRecipeDetails.jsx
    )
}