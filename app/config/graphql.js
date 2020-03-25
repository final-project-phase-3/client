import ApolloClient, { concat } from 'apollo-boost'
import {AsyncStorage} from 'react-native';
import key from './key'

const client = new ApolloClient({
  uri: `${key.BASE_URL}:4000`,
  request: async (operation) => {
    const token = await key.devToken();
    operation.setContext({
      headers: {
        token
      }
    });
  }
})

export default client
