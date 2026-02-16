import React, {createContext, useContext, useEffect, useState} from 'react';

import {locationRequest,locationTranform} from './location.service'
import { locations } from './location.mock';

export type LocationKeys = keyof typeof locations;


type LocationType = {
    lat: number;
    lng: number;
};

interface LocationContextType {
  isLoading: boolean;
  error: string | null;
  location: LocationType | null;
  search: (keyword: LocationKeys) => void;
  keyword: LocationKeys;
}


export const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationContextProvider = ({ children }:any) => {
    const [keyword, setKeyword] = useState<LocationKeys>("san francisco");
    const [location, setLocation] = useState<LocationType | null>(null);
    const [isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);


    const onSearch = (searchKeyword:LocationKeys) => {
        console.log("SEARCHKEYWORD",searchKeyword)
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(()=>{
        if(!keyword.length){
            // don't do anything
            return;
        }
        locationRequest(keyword)
            .then(locationTranform)
            .then((res)=>{
                setIsLoading(false);
                setLocation(res)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
    },[keyword])

    return (
        <LocationContext.Provider value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within LocationContextProvider");
  }

  return context;
};
