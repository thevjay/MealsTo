import React, {useState,createContext,useEffect,useMemo, ReactNode} from "react";

import { restaurantsRequest,restaurantsTranform } from './restaurants.service'

type RestaurantsContextType = {
  restaurants: any[];
  isLoading: boolean;
  error: any;
};

export const RestaurantsContext =
  createContext<RestaurantsContextType>({
    restaurants: [],
    isLoading: false,
    error: null,
  });

type Props = {
  children: ReactNode;
};
export const RestaurantsContextProvider = ({children}:Props) => {
    const [restaurants, setRestaurants] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(()=>{
            restaurantsRequest()
            .then(restaurantsTranform)
            .then((results)=>{
                setRestaurants(results)
                setIsLoading(false)
            }).catch((err)=>{
                setError(err)
                setIsLoading(false)
            })
        },2000)
    }

    useEffect(()=>{
        retrieveRestaurants();
    },[])   

    return (  
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}