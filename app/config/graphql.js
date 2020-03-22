import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://192.168.100.8:4000',
  headers: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzVlNjQyOGIxNWM2NDlhYjA0ZTQzNiIsImlhdCI6MTU4NDc4NTIxNH0.yiUk1nxj7q5EDZ_04D9IcIndbyd1mAtcYBBk0YhXcKE'
  }
})

export default client
