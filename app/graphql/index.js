import { gql } from 'apollo-boost'

export const PROCESS_IMAGE = gql`
  mutation uploadImage($imageUrl: String) {
    processImage(imageUrl: $imageUrl) {
      name
      imageUrl
      msg
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
