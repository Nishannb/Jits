import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import stylesComponent from './style'
import { PropertiesInfoContext } from '../../Components/Contexts/AllContext'

const Settings = () => {

  const styles = stylesComponent()

  const handleLogout = () =>{
    // Logout from here
  }

  const handleDelete = () =>{
    Alert.alert('Confirmation for deleting the account', 'Do you confirm ? ')
  }
  return (
    <View style={styles.settingsContainer}>
      <View style={styles.accountDetailsSection}>
        <View style={styles.detailBox}>
          <Text>Username: </Text>
          <Text>YinYang</Text>
        </View>
        <View style={styles.detailBox}>
          <Text>Number of properties: </Text>
          <Text>1</Text>
        </View>
      </View>
      <View style={styles.actionButtonsSection}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutBtnText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
          <Text style={styles.deleteBtnText}>Delete My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings