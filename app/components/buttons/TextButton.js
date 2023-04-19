import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const TextButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: props.color ?? '#062b80',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          {props.text ?? 'Powrót'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;
