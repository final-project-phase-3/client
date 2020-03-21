import { gql } from 'apollo-boost'

export const PROCESS_IMAGE = gql`
  query uploadImage($imageBase64: String) {
    processImage(imageBase64: $imageBase64) {
      name
      imageUrl
      msg
    }
  }
`
