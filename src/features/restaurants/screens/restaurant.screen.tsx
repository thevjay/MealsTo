import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.comp";

export default function RestaurantsScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    const restaurants = [
  {
    name: "Pizza Palace",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
    ],
    address: "100 Main Street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Burger Town1",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ],
    address: "200 Market Street",
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: true,
  },
  {
    name: "Burger Town2",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ],
    address: "200 Market Street",
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: true,
  },
  {
    name: "Burger Town3",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ],
    address: "200 Market Street",
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: true,
  },
  {
    name: "Burger Town4",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ],
    address: "200 Market Street",
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: true,
  },
  {
    name: "Burger Town5",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ],
    address: "200 Market Street",
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: true,
  },
];


  return (
    <>
      <SafeAreaView className="flex-1 p-1">
        <View className="p-1">
          <Searchbar 
            placeholder="Search.."
            value={searchQuery}
            onChangeText={setSearchQuery}
           />
        </View>
        <View className=" flex-1 p-1 bg-white">
          <FlatList
            data={restaurants}
            renderItem={({item}) => <RestaurantInfoCard restaurant={item}/>}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding:3}}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
