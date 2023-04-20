import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import CustomBackground from '../../components/background/CustomBackground';
import BigButton from '../../components/buttons/BigButton';
import images from '../../assets/images';
import TextButton from '../../components/buttons/TextButton';
import MapContext from '../../contexts/MapContext';
const PromotionScreen = ({navigation}) => {
  const {status, setPromStatus} = useContext(MapContext);

  const setPromStatusfnc = status => {
    setPromStatus(status);
    navigation.navigate('KDA');
  };

  return (
    <CustomBackground header={'Promocja'}>
      <View>
        {(status == 'win' || status == 'draw') && (
          <BigButton
            icon={images.icons.two_arrows_up_white}
            color={'#FFD700'}
            text={'AWANS'}
            onPress={() => setPromStatusfnc('prom')}
          />
        )}

        <BigButton
          icon={images.icons.equal_white}
          color={'#c48d0c'}
          text={'NIC'}
          onPress={() => setPromStatusfnc('')}
        />
        {(status == 'lose' || status == 'draw') && (
          <BigButton
            icon={images.icons.two_arrows_down_white}
            color={'#b30909'}
            text={'SPADEK'}
            onPress={() => setPromStatusfnc('drop')}
          />
        )}

        <TextButton onPress={() => navigation.navigate('MatchResult')} />
      </View>
    </CustomBackground>
  );
};

export default PromotionScreen;
