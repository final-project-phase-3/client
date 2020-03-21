import { ADD_CHOSEN, REMOVE_CHOSEN } from '../actionTypes'

export const addChosen = ingredient => {
  return {
    type: ADD_CHOSEN,
    payload: {
      ingredient
    }
  }
}

export const removeChosen = ingredient => {
  return {
    type: REMOVE_CHOSEN,
    payload: {
      ingredient
    }
  }
}
