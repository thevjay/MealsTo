import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.component'

export default function FavouritesBar({ favourites ,onNavigate}:any) {

  if(!favourites.length) return null

  return (
    <View className='p-1'>
      <View>
        <Text className='p-2'>Favourites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant:any)=>{
          const key = restaurant.name.split(" ").join("")
          return (
            <View key={key} className='mr-10 left-1'>
              <TouchableOpacity onPress={()=> onNavigate("RestaurantDetail",{restaurant})}>
                <CompactRestaurantInfo restaurant={restaurant}/>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
