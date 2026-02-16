import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export default function Search() {
  const { keyword,search }:any= useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState(keyword);


  return (
    <View>
      <Searchbar
        placeholder="Search.."
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
