import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';

const BigButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: props.color,
        flex: 1,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
      }}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={props.icon}
            resizeMode={'cover'}
            style={{height: 100, width: 100}}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {props.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BigButton;
