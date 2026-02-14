import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/restaurant.screen';

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato'

export default function App() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  let [latoLoaded] = useLato({
    Lato_700Bold
  })

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <RestaurantsScreen/>
      <StatusBar style='auto'/>
    </>
  );
}

