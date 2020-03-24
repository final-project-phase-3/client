import ApolloClient from 'apollo-boost'

import key from './key'

const client = new ApolloClient({
  uri: `${key.BASE_URL}:4000`,
  headers: {
    token: key.devToken
  }
})

export default client
