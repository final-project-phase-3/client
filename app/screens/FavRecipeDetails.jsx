import React from 'react'
import RecipeDetailsComp from '../components/RecipeDetailsComp'

export default RecipeDetailScreen = props => {
  const { params } = props.route

  return <RecipeDetailsComp recipe={params.recipe} />
}
