import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component'

export interface Restaurant {
  name: string;
  photos: string[];
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

interface Props {
    restaurant: Restaurant
}

export default function MapCallout({ restaurant }:Props) {
  return (
    <View>
      <CompactRestaurantInfo restaurant={restaurant} />
    </View>
  )
}
