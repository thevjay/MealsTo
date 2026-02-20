import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.comp";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function FavouritesScreen({ navigation }: any) {
  const { favourites, isLoading }: any = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeAreaView>
      <View className=" flex-1 p-1 bg-white">
        <FlatList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
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
  ) : (
    <SafeAreaView>
      <Text>No Favourites Yet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
