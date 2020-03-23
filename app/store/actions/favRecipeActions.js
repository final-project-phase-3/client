import { ADD_CHOSEN, REMOVE_CHOSEN } from '../actionTypes'

export const addChosen = recipe => {
  return {
    type: ADD_CHOSEN,
    payload: {
      recipe
    }
  }
}

export const removeChosen = recipe => {
  return {
    type: REMOVE_CHOSEN,
    payload: {
      recipe
    }
  }
}
