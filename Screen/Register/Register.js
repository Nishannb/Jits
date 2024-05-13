import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

// Sharing same style.js file between Login and Register Screen
import stylesComponent from '../Login/style'

const Register = () => {

    const styles = stylesComponent()
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

  return (
    <View style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.brandNameHeader}>Jits INN</Text>
        <Text style={styles.brandTagText}>Provide Extraordinary Experiences with Every Tap</Text>
        <View>
          <View>
            <TextInput 
              placeholder='Email'
              onChangeText={(text) => handleInputChange('email', text)}
              value={formData.email}
              style={styles.textInput}
              placeholderTextColor="#999999"
              required
            />
          </View>
          <View>
            <TextInput 
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={(text) => handleInputChange('email', text)}
              value={formData.password}
              style={styles.textInput}
              placeholderTextColor="#999999"
              required
            />
          </View>
          <TouchableOpacity style={[styles.loginwithspotifybutton, {backgroundColor: 'white'} ]}>
            <Text style={[styles.buttonText, { color: "#000" }]}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={[ {fontSize: 15, justifyContent: 'center', color: '#fff', margin: 20}]}>Or, Access with your Google Account</Text>
        <TouchableOpacity style={[styles.loginwithspotifybutton, {backgroundColor: 'yellow'} ]}>
            <Text style={[styles.buttonText, { color: "#000" }]}>Register with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register