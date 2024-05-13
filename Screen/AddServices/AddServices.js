import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import stylesComponent from './style';

const AddServices = ({route}) => {
  const [selectedValue, setSelectedValue] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    imageUrl: '',
  });
  
  const handleValueChange = (field, value) => {
    setSelectedValue(prevState=>({
      ...prevState,
      [field]: value
    }));

    console.log(selectedValue)
  };

  const { toDisplay } = route.params;

  const styles = stylesComponent()

  useEffect(()=>{
    if(toDisplay){
      setSelectedValue(prevState=>({
        ...prevState,
        category: toDisplay
      }));
    }
  }, [toDisplay])


  const handleSubmit = () =>{
    if(selectedValue.category !='Late Checkout' && selectedValue.imageUrl == '') return
    // Axios 
  }

  return (
    <View style={styles.addServicesContainer}>
      <View style={styles.form}>

        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputLabel}>Name: </Text>
          <TextInput style={styles.inputBox} placeholder="Name"  onChangeText={(text) => handleValueChange('name', text)} />
        </View>

        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputLabel}>Price: </Text>
          <TextInput style={styles.inputBox} placeholder="Price" onChangeText={(text) => handleValueChange('price', text)}/>
        </View>

        <View style={{borderRadius: 20, overflow: 'hidden'}}>
          <Text style={styles.categoryLabel}>Swipe Down to change Catagory </Text>
          <Picker
            itemStyle={{height: 45, width: '100%'}}
            style={[styles.input, {marginVertical: 0}]}
            selectedValue={selectedValue.category}
            onValueChange={(itemValue) => handleValueChange('category', itemValue)}
            >

            <Picker.Item label="Late Checkout" value="Late Checkout" />
            <Picker.Item label="Rental" value="Rental" />
            <Picker.Item label="Food & Drinks" value="Food & Drinks" />
            <Picker.Item label="Cleaning" value="Cleaning" />
            <Picker.Item label="Guide" value="Guide" />

          </Picker>
        </View>

        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputLabel}>Short Description: </Text>
          <TextInput style={styles.inputBox} placeholder="Description" onChangeText={(text) => handleValueChange('description', text)} />
        </View>

        {selectedValue != 'Late Checkout' && <View style={styles.inputBoxContainer}>
          <Text style={styles.inputLabel}>Image URL: </Text>
          <TextInput style={styles.inputBox} placeholder="Image URL" required  onChangeText={(text) => handleValueChange('imageUrl', text)} />
        </View>}

      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default AddServices;


