import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { MaterialIcons } from "@expo/vector-icons";

export default function Favourite({ restaurant }: any) {
  const context = useContext(FavouritesContext);
  if (!context) return null;

  const { favourites, addToFavourites, removeFromFavourites } = context;

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      className="absolute top-3 right-3 w-16 z-10"
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <View
        className={`p-5 rounded-full ${
          isFavourite ? "bg-white border-2 border-red-500" : "bg-black/30"
        }`}
      >
        <MaterialIcons
          name={isFavourite ? "favorite" : "favorite-border"}
          size={24}
          color={isFavourite ? "red" : "white"}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
