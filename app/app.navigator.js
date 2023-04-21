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
import SaveMapScreen from './Screens/SaveMap/SaveMapScreen';
import Dashboard from './Screens/Dashboard/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './components/background/CustomDrawer';
import HistoryScreen from './Screens/History/HistoryScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <MapProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            headerMode="none"
            initialRouteName="Dashboard"
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeScreen}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="Maps"
              component={MapsScreen}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="MatchResult"
              component={MatchResultScreen}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="Promotion"
              component={PromotionScreen}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="KDA"
              component={KDAScreen}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="SaveMap"
              component={SaveMapScreen}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="Dashboard"
              component={Dashboard}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="History"
              component={HistoryScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </MapProvider>
  );
};

export default AppNavigator;
