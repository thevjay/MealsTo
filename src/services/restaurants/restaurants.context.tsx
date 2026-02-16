import React, { useState, createContext, useEffect } from "react";
import { restaurantsRequest, restaurantsTranform } from "./restaurants.service";
import { useLocation } from "../location/location.context";

type RestaurantsContextType = {
  restaurants: any[];
  isLoading: boolean;
  error: any;
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

type Props = {
  children: React.ReactNode;
};

export const RestaurantsContextProvider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useLocation();

  const retrieveRestaurants = (loc: string) => {
    setIsLoading(true);
    setRestaurants([])
    
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTranform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (!location) return;

    const locationString = `${location.lat},${location.lng}`;
    console.log('LOCATION',locationString)
    retrieveRestaurants(locationString);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
