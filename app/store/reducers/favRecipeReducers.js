import { ADD_CHOSEN_RECIPE, REMOVE_CHOSEN_RECIPE } from '../actionTypes'

const initialState = {
  favRecipes: []
}

const recipesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHOSEN_RECIPE:
      // console.log(action)
      return {
        ...state,
        favRecipes: [
          ...state.favRecipes,
          action.payload.recipe
        ]
      }
    case REMOVE_CHOSEN_RECIPE:
      const newChosen = state.favRecipes.filter(
        rec => rec.idAPI !== action.payload.recipe.idAPI
      )
      return {
        ...state,
        favRecipes: newChosen
      }
    default:
      return state
  }
}

export default recipesReducers
