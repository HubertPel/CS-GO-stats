import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';

const MapBox = () => {
  return (
    <View style={{height: 100, marginTop: 20}} onPress={props.onPress}>
      <ImageBackground
        source={images.horizontalMaps[props.slug]}
        resizeMode={'cover'}
        style={{height: '100%', flexDirection: 'row'}}
        imageStyle={{opacity: 0.6}}>
        <View style={{flex: 2, justifyContent: 'flex-end'}}>
          <Text style={{marginLeft: 20, fontSize: 22, fontWeight: 'bold'}}>
            {props.name.toUpperCase()}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={images.mapIcons[props.slug]}
            style={{height: 100, width: 100}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MapBox;
