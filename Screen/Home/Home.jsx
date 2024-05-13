import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { PropertiesInfoContext } from '../../Components/Contexts/AllContext';
import stylesComponent from './style';
import living from '../../img/living.png';
const bucket = require('../../img/bucket.png')
import diet from '../../img/diet.png'
import check from '../../img/check.png'
import out from '../../img/out.png'
import guide from '../../img/guide.png'
import rental from '../../img/rental.png'
import shuttle from '../../img/shuttle.png'
import lateCheckout from '../../img/latecheckout.png'
import { useNavigation } from '@react-navigation/native';
import health from '../../img/health.jpeg'
import hike from '../../img/hike.jpeg'
import paddle from '../../img/paddle.jpeg'
import bicycle from '../../img/bicycle.jpeg'
import american from '../../img/american.jpeg'
import conti from '../../img/conti.jpeg'
import amenties from '../../img/amenties.jpeg'
import houseRules from '../../img/houseRules.jpeg'
import manual from '../../img/manual.jpeg'


const ServiceList = ({ serviceName }) => {
  const styles = stylesComponent();

  const { propertiesInfo, setPropertiesInfo } = useContext(PropertiesInfoContext)

  const iconList = {
    Rental: rental,
    Cleaning: bucket,
    'Food & Drinks': diet,
    'Airport Shuttle': shuttle,
    'Late-Checkout': lateCheckout
  }

  const handleNavigation = ()=>{

    const resolvedServiceList = propertiesInfo[0].services
      .filter(service => service.category === serviceName) // Filter services by category
      .map(service => ({
        name: service.name,
        image: service.imageUrl,
        price: service.price,
        id: service._id,
        category: service.category,
        description: service.description
      }));
    return navigation.navigate('On-Demand Service', { list: resolvedServiceList})
  }


  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.service} onPress={handleNavigation}>
      <Image style={styles.serviceIconImage} source={iconList[serviceName]} />
      <Text style={styles.serviceText}>{serviceName}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const styles = stylesComponent();

  const { propertiesInfo, setPropertiesInfo } = useContext(PropertiesInfoContext)
  const [ services, setServices ] = useState()
  const navigation = useNavigation()

  useEffect(()=>{
    if(propertiesInfo.length != 0){
      const categoryList = [...new Set(propertiesInfo[0].services.map(service => service.category))];
      setServices(categoryList)
    }
  }, [propertiesInfo])

  const navigate = () =>{
    const resolvedGuideList = propertiesInfo[0].guides.map(guide => ({
      name: guide.name,
      image: guide.img,
      url: guide.url,
      id: guide._id
    }));
    
    console.log(resolvedGuideList)
    return navigation.navigate('Guides', { list: resolvedGuideList, toDisplay: 'guide' })
  }

  const informStatus = (status) =>{
    return Alert.alert(
      `Check-${status} Status`,
      `Inform your host about your check-${status} status.`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => handleCheckInCheckOutStatus(status),
        }
      ]
    );
  }

  const handleCheckInCheckOutStatus = async(status)=>{
    try {
      // Try Axios 
      console.log(status)
    } catch (error) {
      Alert.alert('Error', 'Something went wrong')
    }
  }

  return (
    <View style={styles.homeScreenContainer}>
      {propertiesInfo.length != 0 && <View style={styles.welcomeBannerSection}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.messageText}>{propertiesInfo[0].description}</Text>
      </View>}
      <View style={styles.featureListContainer}>
          <TouchableOpacity style={styles.feature} onPress={navigate}>
            <Image source={guide} style={styles.featureIcon}/>
            <Text style={styles.featureText}>Guides</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.feature} onPress={()=>informStatus('in')}>
          <Image source={check} style={styles.featureIcon} />
          <Text style={styles.featureText}>Check-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feature} onPress={()=>informStatus('out')} >
          <Image source={out} style={styles.featureIcon} />
          <Text style={styles.featureText}>Check-Out</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: 'grey', marginTop: 10 }}>Check-In and Check-Out will notify your host</Text>
      <View style={styles.serviceListContainer}>
        <View style={styles.serviceListBanner}>
          <Text style={styles.serviceListBannerText}>
            Extra{'\n'}On-Demand {'\n'}Services
          </Text>
          <Image style={styles.serviceListBannerImage} source={living} />
        </View>
        <Text style={{marginBottom: 10}}>Select your services</Text>
        <ScrollView contentContainerStyle={styles.serviceList}>
          {services && services.map(serviceName => (
            <ServiceList key={serviceName} serviceName={serviceName}  />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
