import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator , TransitionPresets} from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurants/screens/restaurant.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurantDetail.screen';

const RestaurantStack = createStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator 
      screenOptions={{
        headerShown:false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
        <RestaurantStack.Screen  name='Restaurants' component={RestaurantsScreen}/>
        <RestaurantStack.Screen  name='RestaurantDetail' component={RestaurantDetailScreen}/>
    </RestaurantStack.Navigator>
  )
}

const styles = StyleSheet.create({})