import React from 'react';
import {Image, StyleSheet, View, ImageBackground, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {Navigator, Screen} = createNativeStackNavigator();
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import MapsScreen from './Screens/Maps/MapsScreen';
import MapContext, {MapProvider} from './contexts/MapContext';
import MatchResultScreen from './Screens/MatchResult/MatchResultScreen';
import PromotionScreen from './Screens/Promotion/PromotionScreen';
import KDAScreen from './Screens/KDA/KDAScreen';

const AppNavigator = () => {
  return (
    <MapProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator headerMode="none" initialRouteName="Maps">
            <Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeScreen}
            />
            <Screen
              options={{headerShown: false}}
              name="Maps"
              component={MapsScreen}
            />
            <Screen
              options={{headerShown: false}}
              name="MatchResult"
              component={MatchResultScreen}
            />
            <Screen
              options={{headerShown: false}}
              name="Promotion"
              component={PromotionScreen}
            />
            <Screen
              options={{headerShown: false}}
              name="KDA"
              component={KDAScreen}
            />
          </Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </MapProvider>
  );
};

export default AppNavigator;
