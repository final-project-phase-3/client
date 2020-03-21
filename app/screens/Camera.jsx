import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Camera } from 'expo-camera'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useLazyQuery } from '@apollo/react-hooks'
import ImgToBase64 from 'react-native-image-base64'

import { PROCESS_IMAGE } from '../graphql'

const styles = StyleSheet.create({
  baseButton: {
    textAlign: 'center',
    padding: 5,
    color: '#EFEFEF',
    marginRight: 5,
    fontFamily: 'reem-kufi'
  },
  confirmText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
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
  const { navigate, goBack } = useNavigation()

  const [getImages, { called, loading, error, data }] = useLazyQuery(
    PROCESS_IMAGE
  )

  const takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync({ base64: true })
      setPictureTaken(photo.uri)

      // console.log(photo.base64)
      setImageResult(`data:image/jpeg;base64,${photo.base64}`)

      // ImgToBase64.getBase64String(`${photo.uri}`)
      //   .then(base64Str => {
      //     console.log(base64Str)
      //   })
      //   .catch(err => console.log(err))
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

  if (called && loading) {
    return (
      <View>
        <Text>Loading ... Saving your ingredients</Text>
      </View>
    )
  } else if (!loading && data) {
    console.log(data)
  } else if (!loading && error) {
    console.log(error)
  }

  if (pictureTaken) {
    return (
      <View
        style={{
          backgroundColor: '#1DB954',
          height: '100%',
          position: 'relative'
        }}
      >
        <View
          style={{
            flex: 2,
            backgroundColor: '#EFEFEF',
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 10,
            marginRight: 10,
            padding: 30
          }}
        >
          <Text style={styles.confirmText}>Result Image</Text>
          <Image
            style={{ flex: 1.6, height: 500, width: 313, resizeMode: 'cover' }}
            source={{ uri: pictureTaken }}
          />
          <View style={{ flex: 0.4 }}>
            <Text style={[styles.confirmText, { marginTop: 15 }]}>
              Add to your Refrigerator?
            </Text>
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
              <TouchableOpacity
                onPress={() =>
                  getImages({ variables: { imageBase64: imageResult } })
                }
              >
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
