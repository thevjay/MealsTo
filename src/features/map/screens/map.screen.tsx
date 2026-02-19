import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchMap from "../components/search.component";
import { useLocation } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import MapCallout from "../components/map-callout.component";

export default function MapScreen({navigation}:any) {
  const { location } = useLocation();
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport }: any = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
            >
              <Callout onPress={()=> navigation.navigate('RestaurantDetail',{restaurant:restaurant})}>
                <MapCallout restaurant={restaurant}/>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View className="absolute w-full top-[60] left-5 px-4">
        <SearchMap />
      </View>
    </SafeAreaView>
  );
}
