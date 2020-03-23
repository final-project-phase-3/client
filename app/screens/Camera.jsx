import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Camera } from 'expo-camera'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useMutation } from '@apollo/react-hooks'
import LottieView from 'lottie-react-native'
import axios from 'axios'

import { PROCESS_IMAGE, GET_USER, ADD_TO_FRIDGE } from '../graphql'

const styles = StyleSheet.create({
  outerLayer: {
    backgroundColor: '#1DB954',
    height: '100%',
    position: 'relative'
  },
  innerLayer: {
    flex: 2,
    backgroundColor: '#EFEFEF',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    padding: 30
  },
  baseButton: {
    textAlign: 'center',
    padding: 5,
    color: '#EFEFEF',
    marginHorizontal: 5,
    fontFamily: 'reem-kufi',
    borderRadius: 5
  },
  confirmText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    color: '#1DB954',
    fontFamily: 'reem-kufi'
  }
})

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [camera, setCamera] = useState(null)
  const [imageResult, setImageResult] = useState('')
  const [pictureTaken, setPictureTaken] = useState(null)
  const { goBack, navigate } = useNavigation()
  const [loadingImage, setLoading] = useState(false)
  const [getImages, { data }] = useMutation(PROCESS_IMAGE, {
    onCompleted: () => setLoading(false)
  })
  const [addIngredient] = useMutation(ADD_TO_FRIDGE, {
    refetchQueries: [{ query: GET_USER }]
  })

  const handleAxios = formData => {
    setLoading(true)
    axios({
      method: 'post',
      url: 'http://192.168.77.207:3001/processimage',
      headers: {
        'Content-Type': 'multipart/form-data',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzc3MTNlMGZkNmEzNmY2NTZkNjA4NyIsImlhdCI6MTU4NDg4NzEzOH0.hrPWmDySOnIU4Tn4xiUbcWmXUhZQ5PmdaGyizXi028E'
      },
      data: formData
    })
      .then(response => {
        console.log(response.data, 'INI RESPONSE DATA')
        setImageResult(response.data.imageUrl)
        getImages({ variables: { imageUrl: response.data.imageUrl } })
      })
      .catch(err => console.log(err, 'INI ERROR AXIOS ANJENG'))
  }

  const handlePhoto = photo => {
    let fileName = photo.substring(photo.lastIndexOf('/') + 1)
    let fileType = photo.substring(photo.lastIndexOf('.') + 1)
    let formData = new FormData()
    formData.append('image', {
      uri: photo,
      name: `${fileName}`,
      type: `image/${fileType}`
    })
    handleAxios(formData)
  }

  const takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync({ base64: true, quality : 0.5 })
      console.log(photo.name, photo.type, photo.uri)
      setPictureTaken(photo.uri)
      handlePhoto(photo.uri)
    }
  }

  const savePicture = item => {
    console.log(item)
    if (item) {
      navigate('Fridge')
      addIngredient({
        variables: {
          name: item.processImage.name,
          image_url: item.processImage.imageUrl,
          tags: item.processImage.tags
        }
      })
    }
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return (
      <Text
        style={{
          textAlign: 'center'
        }}
      >
        No access to camera
      </Text>
    )
  }

  if (pictureTaken && !loadingImage) {
    return (
      <View style={styles.outerLayer}>
        <View style={styles.innerLayer}>
          <Text style={styles.confirmText}>Result Image</Text>
          <Image
            style={{ flex: 1.6, height: 500, width: 313, resizeMode: 'cover' }}
            source={{ uri: pictureTaken }}
          />
          <View style={{ flex: 0.4 }}>
            {data && (
              <Text
                style={[styles.confirmText, { marginTop: 10, fontSize: 14 }]}
              >
                Your Ingredients: {data.processImage.name}
              </Text>
            )}
            <Text style={[styles.confirmText]}>Add to your Refrigerator?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
              }}
            >
              <TouchableOpacity onPress={() => setPictureTaken(null)}>
                <Text
                  style={[styles.baseButton, { backgroundColor: '#c93022' }]}
                >
                  Retake Picture
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => savePicture(data)}>
                <Text
                  style={[styles.baseButton, { backgroundColor: '#1DB954' }]}
                >
                  Yes, keep it!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  } else if (loadingImage && pictureTaken) {
    return (
      <View style={styles.outerLayer}>
        <View style={styles.innerLayer}>
          <LottieView
            source={require('../assets/animations/loadingAnimation.json')}
            autoPlay
            loop
          />
          <Text style={{ marginTop: 400, textAlign: 'center' }}>
            Processing your image ...
          </Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={ref => {
          setCamera(ref)
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 30
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            onPress={() => goBack()}
          >
            <Ionicons
              name="ios-arrow-back"
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            onPress={() => {
              takePicture()
            }}
          >
            <FontAwesome
              name="camera"
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }}
          >
            <Ionicons
              name="ios-reverse-camera"
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}
