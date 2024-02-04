import {View, Text, ScrollView, Image, Linking, Alert, TouchableOpacity, Button} from 'react-native';
import React, { useState } from 'react';
import stylesComponent from './style';
import restaurant from '../../img/download.jpeg';
import manual from '../../img/manual.jpeg'
import { useNavigation } from '@react-navigation/native';

const Listing = ({eachItem}) => {
  const styles = stylesComponent();

  const [ selected, setSelected ] = useState(false)

  const handleSelection = async(eachItem)=>{
    if(eachItem?.url){
      console.log('eachitem')
      return await Linking.openURL(eachItem.url)
    } else {
      setSelected(!selected)
    }
  }

  return (
    <TouchableOpacity onPress={()=>handleSelection(eachItem)} style={[styles.singleRecommendationContainer, {backgroundColor: selected ? 'lightblue': 'white'}]}>
      {eachItem?.image && <Image source={eachItem.image} style={styles.singleRecommendationImage} />}
      <View style={styles.singleRecommendationTextSection}>
      {eachItem?.guideTitle && <Text style={styles.singleRecommendationTextHeader}>{eachItem.guideTitle}</Text>}
      {eachItem?.name && <Text style={styles.singleRecommendationTextHeader}>{eachItem.name}</Text>}
      {eachItem?.price && <Text>{eachItem.price}</Text>}
      {eachItem?.description && <Text style={styles.singleRecommendationTextDescription}>{eachItem.description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const ListTemplate = ({route}) => {
    const { list, toDisplay } = route.params;
  const styles = stylesComponent();
  
  const navigation = useNavigation()

  const handleOrder = () =>{
    Alert.alert(
        'Your request has been sent to your host.',
        '',
        [
          { text: 'OK', onPress: () => navigation.navigate('Home') }
        ],
        { cancelable: false }
      )
  }
  return (
    <View style={styles.recommendationContainer}>
      <ScrollView contentContainerStyle={styles.recommendationListSection}>
        {list.map(eachItem => (
          <Listing key={eachItem.id} eachItem={eachItem}  />
        ))}
      </ScrollView>

       {!toDisplay && <TouchableOpacity style={styles.button} onPress={handleOrder}>
          <Text style={styles.buttonText}>Notify my host</Text>
       </TouchableOpacity>}
            
    </View>
  );
};

export default ListTemplate;
