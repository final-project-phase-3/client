import { gql } from 'apollo-boost'

export const PROCESS_IMAGE = gql`
  mutation uploadImage($imageUrl: String) {
    processImage(imageUrl: $imageUrl) {
      name
      imageUrl
      msg
      tags
    }
  }
`

export const ADD_TO_FRIDGE = gql`
  mutation addIngredient($name: String!, $image_url: String!, $tags: [String]) {
    addToFridge(name: $name, image_url: $image_url, tags: $tags) {
      _id
    }
  }
`

export const GET_USER = gql`
  query {
    getUser {
      username
      email
      refrigerator {
        _id
        name
        image_url
      }
    }
  }
`
export const GET_RECIPES_NAME = gql`
  query getRecipes($ingredients:[String]){
    getRecipes(ingredients:$ingredients){
      title
      image
      usedIngredients{
        original
      }
      missedIngredients{
        original
      }
      nutritions{
        title
        amount
        unit
      }
      readyInMinutes
      cookingSteps{
        step
        equipment{
          name
        }
        ingredients{
          name
        }
      }
    }
  }
`