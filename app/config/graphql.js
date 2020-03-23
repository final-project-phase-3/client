import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://192.168.77.207:4000',
  headers: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzc3MTNlMGZkNmEzNmY2NTZkNjA4NyIsImlhdCI6MTU4NDg4NzEzOH0.hrPWmDySOnIU4Tn4xiUbcWmXUhZQ5PmdaGyizXi028E'
  }
})

export default client
