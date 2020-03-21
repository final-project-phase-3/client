import { ADD_CHOSEN, REMOVE_CHOSEN } from '../actionTypes'

const initialState = {
  chosenIngredients: []
}

const ingredientsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHOSEN:
      // console.log(action)
      return {
        ...state,
        chosenIngredients: [
          ...state.chosenIngredients,
          action.payload.ingredient
        ]
      }
    case REMOVE_CHOSEN:
      const newChosen = state.chosenIngredients.filter(
        ing => ing.name !== action.payload.ingredient.name
      )
      return {
        ...state,
        chosenIngredients: newChosen
      }
    default:
      return state
  }
}

export default ingredientsReducers
