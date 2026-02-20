import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

    const saveFavourites = async (value:any) => {
      try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@favourites',jsonValue)
      }catch(err){
        console.log(err)
      }
    }

    const loadFavourites = async () => {
      try {
        const value = await AsyncStorage.getItem('@favourites');
        if(value !== null){
          // value previously store
          setFavourites(JSON.parse(value))
        }
      } catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      loadFavourites();
    },[])

    useEffect(()=>{
      saveFavourites(favourites)
    },[favourites])

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

