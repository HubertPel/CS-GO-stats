import React from 'react';
import {Text, View} from 'react-native';
import CustomBackground from '../../components/background/CustomBackground';

const MatchResultScreen = () => {
  return (
    <CustomBackground>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rezultat Meczu</Text>
      </View>
      <View style={{marginTop: 50}}></View>
    </CustomBackground>
  );
};

export default MatchResultScreen;
