<<<<<<< HEAD
import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'
=======
import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, ScrollView, Animated, Easing } from 'react-native'
>>>>>>> Detail page almost done
import RecipeCard from '../components/RecipeCard'
import Styles from '../Styles'
import LottieView from 'lottie-react-native'
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler'

export default RecipeDetails = props => {
  const favouriteList = [
    {
      name: 'Beef Rendang',
      url:
        'https://s3media.freemalaysiatoday.com/wp-content/uploads/2019/06/rendang-lifestyle-020619-1.jpg'
    },
    {
      name: 'Chicken Opor',
      url:
        'https://cdn2.tstatic.net/palu/foto/bank/images/opor-ayam-lezat-untuk-sajian-lebaran.jpg'
    },
    {
      name: 'Spaghetti Bolognese',
      url:
        'https://thecozyapron.com/wp-content/uploads/2019/05/spaghetti-bolognese_thecozyapron_1.jpg'
    },
    {
      name: 'Sayur Asem',
      url:
        'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/25/968568/670x335/5-cara-masak-sayur-asem-yang-enak-segar-dan-mudah-ala-sunda-betawi-serta-jawa-rev-1.jpg'
    },
    {
      name: 'Sweet And Sour Prawns',
      url:
        'https://oversixtydev.blob.core.windows.net/media/10108/sweet-and-sour-prawns.jpg'
    },
    {
      name: 'Fried Rice',
      url:
        'https://thewoksoflife.com/wp-content/uploads/2019/08/fried-brown-rice-12-500x500.jpg'
    },
    {
      name: 'Pan Seared Steak',
      url:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/1/2/0/valentines_steak.jpg.rend.hgtvcom.826.620.suffix/1557859049553.jpeg'
    }
  ]

<<<<<<< HEAD
  const [favourites, setFavourites] = useState(favouriteList)

  return (
    <ImageBackground
      source={require('../assets/SearchBackground.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 24,
            fontFamily: 'reem-kufi',
            color: '#666565'
          }}
        >
          Your favourite recipes
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            {favourites.map(recipe => {
              return <RecipeCard recipe={recipe} />
            })}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
=======
    const favouriteList = [
        {
            name : 'Beef Rendang' ,
            url : 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2019/06/rendang-lifestyle-020619-1.jpg'
        },
        {
            name : 'Chicken Opor' ,
            url : 'https://cdn2.tstatic.net/palu/foto/bank/images/opor-ayam-lezat-untuk-sajian-lebaran.jpg'
        },
        {
            name : 'Spaghetti Bolognese' ,
            url : 'https://thecozyapron.com/wp-content/uploads/2019/05/spaghetti-bolognese_thecozyapron_1.jpg'
        },
        {
            name : 'Sayur Asem' ,
            url : 'https://cdns.klimg.com/merdeka.com/i/w/news/2018/04/25/968568/670x335/5-cara-masak-sayur-asem-yang-enak-segar-dan-mudah-ala-sunda-betawi-serta-jawa-rev-1.jpg'
        },
        {
            name : 'Sweet And Sour Prawns' ,
            url : 'https://oversixtydev.blob.core.windows.net/media/10108/sweet-and-sour-prawns.jpg'
        },
        {
            name : 'Fried Rice' ,
            url : 'https://thewoksoflife.com/wp-content/uploads/2019/08/fried-brown-rice-12-500x500.jpg'
        },
        {
            name : 'Pan Seared Steak' ,
            url : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/1/2/0/valentines_steak.jpg.rend.hgtvcom.826.620.suffix/1557859049553.jpeg'
        },
    ]
    
    const [favourites, setFavourites] = useState(favouriteList)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })


    if(loading) return <LottieView source={require('../assets/animations/loadingAnimation.json')} autoPlay loop/>

    else return(
        <ImageBackground source={require('../assets/SearchBackground.png')} style={{width: '100%', height: '100%'}}>
            <View style={{flex : 1}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={{flex:1}}>
                        <View style={{alignItems : 'center', justifyContent : "center"}}>
                            <Text style={Styles.TitleText}>❤️ Your favourites!</Text>
                        </View>
                        {
                            favourites.map(recipe => {
                                return (
                                    <RecipeCard recipe={recipe}/>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
>>>>>>> Detail page almost done
