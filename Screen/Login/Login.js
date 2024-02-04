import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import stylesComponent from './style'

const Login = () => {

    const styles = stylesComponent()

  return (
    <View style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.brandNameHeader}>Tap INN</Text>
        <Text style={styles.brandTagText}>Provide Extraordinary Experiences with Every Tap</Text>
        <TouchableOpacity style={styles.loginwithspotifybutton}>
            <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginwithspotifybutton, {backgroundColor: 'yellow'} ]}>
            <Text style={[styles.buttonText, { color: "#000" }]}>Register with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login