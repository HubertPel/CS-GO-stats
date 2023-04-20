import React from 'react';
import {ScrollView, View} from 'react-native';
import Navbar from './Navbar';

const CustomBackground = props => {
  return (
    <View style={{flex: 1}}>
      <Navbar header={props.header} />
      <ScrollView
        style={{
          backgroundColor: '#303030',
          paddingHorizontal: 20,
        }}>
        {props.children}
      </ScrollView>
    </View>
  );
};

export default CustomBackground;
