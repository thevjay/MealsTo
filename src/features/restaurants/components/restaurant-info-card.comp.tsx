import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

interface RestauantsDetails {
    name: string;
    icon: string;
    photos: string[];
    address:string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily?: boolean;
}

interface Props {
    restaurant: RestauantsDetails
}

export default function RestaurantInfoCard({ restaurant }:Props) {
  const { 
    name = 'Restaurant', 
    icon, 
    photos = [
        'https://www.foodiesfeed.com/hi/free-food-photo/golden-toast-stacked-on-neutral-background'
    ], 
    address = '100 some random street', 
    isOpenNow = true, 
    rating = 4,
    isClosedTemporarily
 } = restaurant;

  return (
    <Card elevation={5} className="bg-white">
        <Card.Cover 
            key={name} 
            source={{ uri: photos[0] }}
            className="p-1 bg-white"
        />
        <Text style={{ fontFamily: "Lato_700Bold" }} className="p-5 font-family-">{name}</Text>
    </Card>
  );
}


