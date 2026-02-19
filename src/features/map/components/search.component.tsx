import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export default function SearchMap() {
  const { keyword,search }:any= useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(()=>{
    setSearchQuery(keyword)
  },[keyword])

  return (
    <View className="absolute z-100 t-[30px] w-[100%]">
      <Searchbar
        placeholder="Search.."
        icon='map'
        value={searchQuery}
        onSubmitEditing={()=>{
          search(searchQuery)
        }}
        onChangeText={(text)=>{
          setSearchQuery(text)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
