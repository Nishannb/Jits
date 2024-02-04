import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
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



const guides = [
  {
    id: 1,
    guideTitle: 'Check-Out guide',
    image: manual,
    url: 'https://i.pinimg.com/564x/0f/9c/42/0f9c42cdccb48f446dee9aa320b861e2.jpg'
  },
  {
    id: 2,
    guideTitle: 'Amenties guide',
    image: amenties,
    url: 'https://i.pinimg.com/564x/0f/9c/42/0f9c42cdccb48f446dee9aa320b861e2.jpg'
  },
  {
    id: 3,
    guideTitle: 'House rules',
    image: houseRules,
    url: 'https://i.pinimg.com/564x/0f/9c/42/0f9c42cdccb48f446dee9aa320b861e2.jpg'
  },
]

const breakfast = [
  {
    id: 1,
    name: "Continental Breakfast",
    description: "A simple breakfast consisting of pastries, bread, butter, jam, yogurt, and fruit.",
    price: "$20 per person",
    includes: ["Assorted pastries", "Fresh bread", "Butter and jam", "Yogurt", "Fresh fruit", "Coffee and tea"],
    image: conti
  },
  {
    id: 2,
    name: "American Breakfast",
    description: "A hearty breakfast featuring eggs, bacon, sausage, hash browns, toast, and orange juice.",
    price: "$25 per person",
    includes: ["Scrambled or fried eggs", "Bacon", "Sausage links or patties", "Hash browns or home fries", "Toast or English muffin", "Orange juice"],
    image: american
  },
  {
    id: 3,
    name: "Healthy Breakfast",
    description: "A nutritious breakfast option with options like oatmeal, smoothies, avocado toast, and fresh fruit.",
    price: "$25 per person",
    includes: ["Oatmeal with toppings", "Smoothies with spinach and fruit", "Avocado toast with poached egg", "Greek yogurt with granola", "Fresh fruit platter", "Herbal tea"],
    image: health
  }
];

const rentalGear = [
  {
    id: 1,
    name: "Bicycles",
    description: "Explore the area on two wheels with our rental bicycles.",
    price: "$20 per day",
    includes: ["Mountain bikes", "Helmets", "Locks", "Map of local trails"],
    image: bicycle
  },
  {
    id: 2,
    name: "Stand-up Paddleboards",
    description: "Enjoy a day on the water with our rental stand-up paddleboards.",
    price: "$30 per day",
    includes: ["Inflatable paddleboards", "Paddles", "Life jackets", "Instructional guide"],
    image: paddle
  },
  {
    id: 3,
    name: "Hiking Gear",
    description: "Embark on an adventure with our rental hiking gear.",
    price: "$15 per day",
    includes: ["Backpacks", "Trekking poles", "Hiking boots", "Trail maps"],
    image: hike
  }
];
const services = [
  {
    id: 1,
    serviceName: 'Cleaning',
    image: bucket
  },
  {
    id: 2,
    serviceName: 'Breakfast',
    image: diet,
    options: breakfast
  },
  {
    id: 3,
    serviceName: 'Rental',
    image: rental,
    options: rentalGear
  },
  {
    id: 4,
    serviceName: 'Airport Shuttle',
    image: shuttle
  },
  {
    id: 5,
    serviceName: 'Late Check-Out',
    image: lateCheckout
  },
]


const ServiceList = ({ service }) => {
  const styles = stylesComponent();

  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate('On-Demand Service', { list: service.options ? service.options: [1,2,3,4]})}>
      <Image style={styles.serviceIconImage} source={service.image} />
      <Text style={styles.serviceText}>{service.serviceName}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const styles = stylesComponent();

  const navigation = useNavigation()

  const navigate = () =>{
    return navigation.navigate('Guides', { list: guides, toDisplay: 'guide' })
  }

  const informStatus = (status) =>{
    return Alert.alert(`Click OK to notify your host about your check-${status} status.`)
  }
  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.welcomeBannerSection}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.messageText}>You are in to YinYang Residence.</Text>
      </View>
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
        <Text style={{marginBottom: 20}}>Select your services</Text>
        <ScrollView contentContainerStyle={styles.serviceList}>
          {services.map(service => (
            <ServiceList key={service.id} service={service}  />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
