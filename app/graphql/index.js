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

export const ADD_TO_FAVOURITE = gql`
  mutation addToFav(
    $idAPI: String!
    $title: String!
    $image: String
    $cookingSteps: [Object]
    $usedIngredients: [Object]
    $missedIngredients: [Object]
    $nutritions: [Object]
    $readyInMinutes: Int
  ) {
    addToFav(
      idAPI: $idAPI
      title: $title
      image: $image
      usedIngredients: $usedIngredients
      missedIngredients: $missedIngredients
      cookingSteps: $cookingSteps
      nutritions: $nutritions
      readyInMinutes: $readyInMinutes
    ) {
      _id
    }
  }
`

export const REMOVE_FAVOURITE = gql`
  mutation removeFromFav($idAPI: String!) {
    removeFromFav(idAPI: $idAPI) {
      title
    }
  }
`

export const GET_FAV = gql`
  query {
    getFav {
      _id
      idAPI
      title
      image
      usedIngredients
      missedIngredients
      nutritions
      cookingSteps
      readyInMinutes
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
  query getRecipes($ingredients: [String]) {
    getRecipes(ingredients: $ingredients) {
      id
      title
      image
      usedIngredients {
        original
      }
      missedIngredients {
        original
      }
      nutritions {
        title
        amount
        unit
      }
      readyInMinutes
      cookingSteps {
        step
        equipment {
          name
        }
        ingredients {
          name
        }
      }
    }
  }
`

export const DELETE_INGREDIENT = gql`
  mutation deleteIngredient($_id: String!) {
    deleteFromFridge(_id: $_id) {
      _id
      username
    }
  }
`

export const GET_RANDOM_RECIPES = gql`
  query {
    getRandomRecipes {
      id
      title
      image
      ingredients {
        original
      }
      nutritions {
        title
        amount
        unit
      }
      readyInMinutes
      cookingSteps {
        step
        equipment {
          name
        }
        ingredients {
          name
        }
      }
    }
  }
`
export const REGISTER = gql`
  mutation register($username: String!,$email: String!,$password: String!) {
    register(username:$username,email:$email,password:$password) {
      token
    }
  }
`

export const LOGIN = gql`
  mutation login($input: String!,$password: String!) {
    login(input:$input,password:$password) {
      token
    }
  }
`