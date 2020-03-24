import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  RecipeCard: {
    backgroundColor: '#1db954',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 28,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7
  },
  RecipeCardView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  RecipeCardText: {
    color: '#EFEFEF',
    fontFamily: 'reem-kufi',
    fontSize: 26,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 15
  },
  TitleText: {
    color: '#666565',
    fontFamily: 'reem-kufi',
    fontSize: 22,
    textAlign: 'center',
    marginTop: '3%'
  },
  Shadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7
  },
  RecipeEquipmentsCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7
  },
  nutritionalValueButton: {
    backgroundColor: 'rgba(231,76,60,1)',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 999,
    position: 'absolute',
    bottom: 15,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7
  }
})
