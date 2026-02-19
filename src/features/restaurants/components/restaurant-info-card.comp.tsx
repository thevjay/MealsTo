import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Favourite from "../../../components/favourites/favourite.component";

interface RestauantsDetails {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
}

interface Props {
  restaurant: RestauantsDetails;
}

export default function RestaurantInfoCard({ restaurant }: Props) {
  const {
    name = "Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photos = ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5} className="bg-white mb-5">
      <Favourite restaurant={restaurant}/>
      <Card.Cover
        key={name}
        source={{ uri: photos[0] }}
        style={{ height: 180 }}
      />

      <Text style={{ fontFamily: "Lato_700Bold" }} className="p-2">
        {name}
      </Text>
      <View className="flex-row items-center">
        <View className="flex-row p-1">
          {ratingArray.map((_, index) => (
            <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
          ))}
        </View>
        <View className="flex-1 flex-row justify-end">
          {isClosedTemporarily && (
            <Text className="text-red-700 font-bold">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
        </View>
      </View>
      <Text className="text-sm p-1">{address}</Text>
    </Card>
  );
}
