import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import stylesComponent from './style';
import restaurant from '../../img/download.jpeg';
import cafe from '../../img/cafe.jpeg'
import nextCafe from '../../img/cafe2.jpeg'
import bar from '../../img/bar.jpeg'
import nextBar from '../../img/bar2.jpeg'


const places = [
  {
    name: "Udon Mise",
    openingHours: "8:00 AM - 10:00 PM",
    description: "People often go to this place for enjoyment. Best place in town.",
    image: cafe,
  },
  {
    name: "Café de Paris",
    openingHours: "7:00 AM - 9:00 PM",
    description: "A cozy café with a wide range of delicious pastries and coffee.",
    image: bar,
  },
  {
    name: "Sunset Grill",
    openingHours: "11:00 AM - 11:00 PM",
    description: "Enjoy mouthwatering grilled dishes while watching the sunset.",
    image: nextCafe,
  },
  {
    name: "Sushi Haven",
    openingHours: "12:00 PM - 10:00 PM",
    description: "A haven for sushi lovers with fresh and authentic Japanese cuisine.",
    image: nextBar,
  },
  {
    name: "Pizzeria Italia",
    openingHours: "11:30 AM - 9:30 PM",
    description: "Experience the taste of Italy with our authentic wood-fired pizzas.",
    image: restaurant,
  },
  {
    name: "Taco Shack",
    openingHours: "10:00 AM - 8:00 PM",
    description: "Satisfy your craving for tacos with our flavorful and diverse selection.",
    image: cafe,
  },
  {
    name: "Burger Joint",
    openingHours: "11:00 AM - 10:00 PM",
    description: "Indulge in juicy burgers made from the finest ingredients.",
    image: nextBar,
  },
  {
    name: "Gelato Delight",
    openingHours: "12:00 PM - 9:00 PM",
    description: "Cool off with a delightful variety of artisanal gelato flavors.",
    image: bar,
  },
  {
    name: "Tea Garden",
    openingHours: "9:00 AM - 7:00 PM",
    description: "Relax and unwind in our serene tea garden with a wide selection of teas.",
    image: nextCafe,
  },
  {
    name: "Barbecue Pit",
    openingHours: "5:00 PM - 12:00 AM",
    description: "Feast on smoky barbecue dishes cooked to perfection over an open pit.",
    image: restaurant
  }
];

const PlacesList = ({place}) => {
  const styles = stylesComponent();
  return (
    <View style={styles.singleRecommendationContainer}>
      <Image source={place.image} style={styles.singleRecommendationImage} />
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
  return (
    <View style={styles.recommendationContainer}>
      <View style={styles.recommendationHeaderContainer}>
        <Text style={styles.recommendationHeaderText}>
          Top 10 Recommendation
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.recommendationListSection}>
        {places.map(place => (
          <PlacesList key={place.description} place={place} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommendation;
