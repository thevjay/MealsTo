import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

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


export default function CompactRestaurantInfo({ restaurant }:Props) {
  return (
    <View className='p-4 max-w-xs items-center'>
      <Image 
        className='rounded-lg w-28 h-28'
        source={{ uri: restaurant.photos[0]}}
      />
      <Text>
        {restaurant.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})