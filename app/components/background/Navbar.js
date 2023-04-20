import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../assets/colors';

const Navbar = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        backgroundColor: colors.darkerGrey,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.header}</Text>
    </View>
  );
};

export default Navbar;
