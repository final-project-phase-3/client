import {AsyncStorage} from 'react-native';
export default {
  BASE_URL: 'http://192.168.100.48',
  devToken: async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      return value
    } catch (error) {
      return null
    }
  }
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzQ4MWUzMTJhZjMyNGU2YTRjZTQwNiIsImlhdCI6MTU4NDcwODI5N30.bJjQX2-RTd8EvKl5_f-oorQyt8ucmB2xcqK_R1TuhTg'
}
