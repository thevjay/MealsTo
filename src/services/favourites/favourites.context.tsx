import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

export interface Restaurant {
  placeId: string;
  name: string;
  photos: string[];
}
interface FavouritesContextType {
  favourites: Restaurant[];
  addToFavourites: (restaurant: Restaurant) => void;
  removeFromFavourites: (restaurant: Restaurant) => void;
}

export const FavouritesContext =
  createContext<FavouritesContextType | undefined>(undefined);


export default function FavouritesContextProvider({ children}:any) {

    const [favourites, setFavourites] = useState<Restaurant[]>([]);

    const add = (restaurant:any) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant:any) => {
        const newFavourites = favourites.filter((x)=> x.placeId !== restaurant.placeId)
        setFavourites(newFavourites)
    }
  return (
    <FavouritesContext.Provider
        value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove
        }}
    >
        {children}
    </FavouritesContext.Provider>
  )
}

