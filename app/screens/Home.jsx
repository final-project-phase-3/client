import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,ScrollView, StatusBar
} from 'react-native'
import Styles from '../Styles'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button'
import { useSelector } from 'react-redux'
import { copilot,CopilotStep,walkthroughable } from "react-native-copilot"
import Fridge from '../components/Fridge'
import RecipesCarousel from '../components/RecipesCarousel'
import { ShadowPropTypesIOS,Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SearchBar } from 'react-native-elements'

const CopilotView = walkthroughable(View);
const CopilotTouchableOpacity = walkthroughable(TouchableOpacity);

function Home(props) {
  const [searchText, setSearchText] = useState('') 
  const { navigate } = useNavigation()

  const { chosenIngredients } = useSelector(state => {
    return state.ingredientsReducers
  })
  // useEffect(() => {
  //   Alert.alert(
  //     `Start Tutorial`,
  //     '',
  //     [
  //       {
  //         text: 'Skip',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => props.start()
  //       }
  //     ],
  //     { cancelable: true }
  //   )
  // },[])
  

  const handleSearch = () => {
    if (chosenIngredients.length < 1) {
      alert('Please select your ingredients to get recipes recommendation')
    } else {
      navigate('SearchResult')
    }
  }

  const handleSearchBar = (searchQuery) => {
    console.log(searchQuery)
    props.navigation.navigate('Camera')
  }

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      header: () => (
        <View style={{width : '100%', flexDirection : 'row', backgroundColor : '#1db954', paddingTop : StatusBar.currentHeight}}>
          <View style={{flex : 2, justifyContent : 'center'}}>
            <Text style={{fontSize : 21, fontFamily : 'reem-kufi', color : "#EFEFEF", paddingLeft: 10}}>Coolkas</Text>
          </View>
          <View style={{flex : 4, paddingRight : 5, paddingHorizontal : '10%', justifyContent : 'center'}}>
            <View style={{height : 50, maxHeight : '80%', flexDirection : "row", borderRadius : 20, backgroundColor : '#EFEFEF'}}>
              <View style={{justifyContent : 'center', alignItems:'center', flex : 1, paddingLeft:10}}>
                <MaterialIcons name="search" size={20} color="#1DB954" />
              </View>
              <TextInput style={{...Styles.searchTextInput, flex : 11}} 
                placeholder="Find a recipe.."
                onSubmitEditing={(event)=> handleSearchBar(event.nativeEvent.text)}
                value=""
                />
            </View>
          </View>
        </View>
      )
    })
  }, [props.navigation])

  return (

    <ImageBackground
    source={require('../assets/home-bg.png')}
    style={{ width: '100%', height: '100%' }}
    >
    <ScrollView>
      <CopilotStep
          text="You can see random recipe here!"
          order={4}
          name="carousel"
          >
          <CopilotView>
            <View>
              <RecipesCarousel />
            </View>
          </CopilotView>
        </CopilotStep>
      

      <View style={styles.mainContainer}>
        <View style={styles.headContainer}>
          <Text style={[styles.textTitle]}>Your Ingredients</Text>
          <CopilotStep
            text="Click here to take picture your ingredient"
            order={1}
            name="upload"
            >
            <CopilotTouchableOpacity>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={() => navigate('Camera')}
                >
                <Ionicons name="ios-camera" size={24} color="#efefef" />
                <Text style={styles.textBtn}>Upload</Text>
              </TouchableOpacity>
            </CopilotTouchableOpacity>
          </CopilotStep>
        </View>
        <CopilotStep
            text="Your ingredients will be stored here after previous step!"
            order={2}
            name="fridge"
            >
          <CopilotView>
            <View style={styles.contentContainer}>
              <Fridge />
            </View>
          </CopilotView>
        </CopilotStep>
      </View>
      </ScrollView>
      <CopilotStep
          text="Click here to find recipe by ingredients"
          order={3}
          name="search"
          >  
        <CopilotView style={Styles.nutritionalValueButton}>
          <View >
            <TouchableOpacity onPress={handleSearch}>
              <Text style={{...Styles.TitleText, color : "white", fontSize : 12}}>
                <Ionicons name="ios-search" size={20} color="#efefef" />
              </Text>
            </TouchableOpacity>
          </View>
        </CopilotView>
      </CopilotStep>
            
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: 'column'
  },
  headContainer: {
    flex: 0.25,
    alignItems: 'center',
    marginTop: 5
  },
  contentContainer: {
    flex: 1.75,
    width: '100%',
    padding: 10,
    height: Dimensions.get('window').height,
    marginTop: 30
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#666565',
    fontFamily: 'reem-kufi'
  },
  uploadBtn: {
    flexDirection: 'row',
    backgroundColor: '#1DB954',
    width: 150,
    justifyContent: 'center',
    color: '#EFEFEF',
    letterSpacing: 2,
    fontSize: 14,
    padding: 5,
    borderRadius: 10,
    marginTop: 10
  },
  textBtn: {
    marginLeft: 6,
    color: '#efefef',
    fontSize: 16,
    fontFamily: 'reem-kufi'
  }
})

export default copilot()(Home)
