import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RestaurantInfoCard from '../components/restaurant-info-card.comp'

export default function RestaurantDetailScreen({route}:any) {
    const { restaurant } = route.params

  return (
    <SafeAreaView>
        <RestaurantInfoCard restaurant={restaurant}/>
    </SafeAreaView>
  )
}
