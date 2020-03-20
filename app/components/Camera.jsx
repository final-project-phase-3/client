import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, Button } from 'react-native'
import { Camera } from 'expo-camera'
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [camera, setCamera] = useState(null)
  const [pictureTaken, setPictureTaken] = useState(null)

  const takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync({ base64: true })
      console.log(photo.uri)
      console.log(photo.base64.substr(20))
      setPictureTaken(photo.uri)
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
    return <Text>No access to camera</Text>
  }
  if (pictureTaken) {
    return (
      // <Text>PictureTaken</Text>
      <View>
        <Image
          style={{ height: 500, width: 500 }}
          source={{ uri: pictureTaken }}
        />
        <Button onPress={() => setPictureTaken(null)} title="Erase"></Button>
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
            margin: 20
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
          >
            <Ionicons
              name="ios-photos"
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
            <MaterialCommunityIcons
              name="camera-switch"
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}
