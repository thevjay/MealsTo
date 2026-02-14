import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.comp";

export default function RestaurantsScreen() {
    const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="p-5">
          <Searchbar 
            placeholder="Search.."
            value={searchQuery}
            onChangeText={setSearchQuery}
           />
        </View>
        <View className=" flex-1 p-5 bg-white">
          <RestaurantInfoCard
            restaurant={{
                name:'Some Restaurant', 
                icon:"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png", 
                photos :[
                    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5'
                ], 
                address:'100 some random street', 
                isOpenNow:true, 
                rating:4,
                isClosedTemporarily: true
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
