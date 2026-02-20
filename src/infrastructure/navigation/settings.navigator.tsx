import React, { useEffect } from 'react'

import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
import SettingScreen from '../../features/settings/screens/setting.screen';
import Favourite from '../../components/favourites/favourite.component';
import FavouritesScreen from '../../features/settings/screens/Favourites.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }:any) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name='Settings'
                component={SettingScreen}
            />
            <SettingsStack.Screen name='Favourites' component={FavouritesScreen}/>
        </SettingsStack.Navigator>
    )
}