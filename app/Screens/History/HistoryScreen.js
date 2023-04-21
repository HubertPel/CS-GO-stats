import React from 'react';
import CustomBackground from '../../components/background/CustomBackground';
import {Text, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import MapBox from '../../components/boxes/MapBox';
const db = openDatabase({
  name: 'matches',
});
const HistoryScreen = props => {
  const showMaps = () => {
    let view = [];
  };

  return (
    <CustomBackground header={'Historia'}>
      <View>{showMaps()}</View>
    </CustomBackground>
  );
};

export default HistoryScreen;
