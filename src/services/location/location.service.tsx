import camelize from "camelize"

import { locations } from "./location.mock"

type LocationKeys = keyof typeof locations;

export const locationRequest = (searchTerm: LocationKeys) => {
    return new Promise((resolve,reject)=>{
        const locationMock = locations[searchTerm];
        if(!locationMock){
            reject("not found");
            return
        }
        resolve(locationMock)
    });
}

export const locationTranform = (result:any) => {
    const { geometry={} } = camelize(result.results)[0];
    const { lat, lng } = geometry.location;

    return { lat, lng}
}   