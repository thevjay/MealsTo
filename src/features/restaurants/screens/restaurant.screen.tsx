import { StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Searchbar, MD2Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.comp";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import Search from "../components/search.component";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export default function RestaurantsScreen({ navigation }:any) {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const {favourites}:any = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <View className="p-3">
          <Search isFavouritesToggled={isToggled} onFavouritesToggled={() => setIsToggled(!isToggled)}/>
        </View>
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>
        <View className=" flex-1 p-1 bg-white">
          <FlatList
            data={restaurants}
            renderItem={({ item }) =>{
              return(
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail",{restaurant: item,})}>
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
            )}}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 8 }}
          />
          {isLoading && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            >
              <ActivityIndicator size={50} color={MD2Colors.blue700} />
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}
