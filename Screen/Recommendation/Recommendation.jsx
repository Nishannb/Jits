import {View, Text, ScrollView, Image, Alert} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import stylesComponent from './style';
import restaurant from '../../img/download.jpeg';
import cafe from '../../img/cafe.jpeg'
import nextCafe from '../../img/cafe2.jpeg'
import bar from '../../img/bar.jpeg'
import nextBar from '../../img/bar2.jpeg'
import { PropertiesInfoContext } from '../../Components/Contexts/AllContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const PlacesList = ({place}) => {
  const styles = stylesComponent();
  return (
    <View style={styles.singleRecommendationContainer}>
      <Image src={place.image} style={styles.singleRecommendationImage} />
      <View style={styles.singleRecommendationTextSection}>
        <Text style={styles.singleRecommendationTextHeader}>{place.name}</Text>
        <Text>{place.openingHours}</Text>
        <Text style={styles.singleRecommendationTextDescription}>
          {place.description}
        </Text>
      </View>
    </View>
  );
};

const Recommendation = () => {
  const styles = stylesComponent();

  const { propertiesInfo, setPropertiesInfo } = useContext(PropertiesInfoContext)

  const [ places, setPlaces ] = useState([])
  useEffect(()=>{
    const fetch = async()=>{
      try {
        const response = await AsyncStorage.getItem('checking')
        if(response){
          console.log('its printed: ', JSON.parse(response))
          Alert.alert( JSON.parse(response))
        } else {
          console.log('not printed.')
        }
      } catch (error) {
        console.log('gave error in fetching: ',error)
      }
    }

    fetch()
  }, [])

  useEffect(()=>{
    if(propertiesInfo.length !=0){
      const resolvedPlaceList = propertiesInfo[0].nearbyPlaces.map(place => ({
        name: place.place_name,
        image: place.place_img,
        url: place.place_url,
        description: place.place_description,
        openingHours: place.place_hours,
        id: place._id
      }));

      setPlaces(resolvedPlaceList)
    }

  }, [propertiesInfo])
  return (
    <View style={styles.recommendationContainer}>
      <View style={styles.recommendationHeaderContainer}>
        <Text style={styles.recommendationHeaderText}>
          Top Recommendation
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.recommendationListSection}>
        {places.map(place => (
          <PlacesList key={place.id} place={place} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommendation;
