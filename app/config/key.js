import {AsyncStorage} from 'react-native';
export default {
  BASE_URL: 'http://192.168.77.207',
  devToken: async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      return value
    } catch (error) {
      return null
    }
  }
}
