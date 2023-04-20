import React, {useState} from 'react';
import {Image, View} from 'react-native';
import images from '../../assets/images';
import colors from '../../assets/colors';
import {re} from '@babel/core/lib/vendor/import-meta-resolve';

const SmallMatchResultBox = props => {
  const [color, setColor] = useState(() => {
    if (props.result === 'win') {
      return colors.green;
    } else if (props.result === 'draw') {
      return colors.yellow;
    } else {
      return colors.red;
    }
  });
  const [icon, setIcon] = useState(() => {
    if (props.prom != '') {
      if (props.prom == 'prom') {
        return images.icons.two_arrows_up_white;
      } else {
        return images.icons.two_arrows_down_white;
      }
    } else {
      if (props.result == 'win') {
        return images.icons.check_white;
      } else if (props.result == 'draw') {
        return images.icons.equal_white;
      } else {
        return images.icons.x_white;
      }
    }
  });

  return (
    <View
      style={{
        backgroundColor: color,
        height: 30,
        width: 30,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={icon} style={{height: 25, width: 25}} />
    </View>
  );
};

export default SmallMatchResultBox;
