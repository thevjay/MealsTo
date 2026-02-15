import { mockImages, mocks } from "./mock"
import camelize from 'camelize'

export const restaurantsRequest = (location = '37.7749295,-122.4194155'):Promise<any[]> => {
    return new Promise((resolve,reject)=>{
        const mock = mocks[location];
        if(!mock) reject("not found")
        resolve(mock.results)    
    })
}

export const restaurantsTranform = (results: any[]) => {
  const mappedResults = results.map((restaurant: any) => {
    console.log("\n IMAGES",mockImages)
    const photos = restaurant.photos?.map(() => {
      return mockImages[
        Math.floor(Math.random() * mockImages.length)
      ];
    }) ?? [];
    console.log("\n\n AFTER_IMAGES",photos)

    return {
      ...restaurant,
      photos,
      isOpenNow: restaurant.opening_hours?.open_now ?? true,
      isClosedTemporarily:
        restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
