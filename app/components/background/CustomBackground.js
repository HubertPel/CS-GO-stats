import React from 'react';
import {ScrollView} from 'react-native';

const CustomBackground = props => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#303030',
        paddingHorizontal: 20,
        paddingTop: 20,
      }}>
      {props.children}
    </ScrollView>
  );
};

export default CustomBackground;
