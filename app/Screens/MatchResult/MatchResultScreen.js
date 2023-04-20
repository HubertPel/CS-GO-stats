import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import CustomBackground from '../../components/background/CustomBackground';
import BigButton from '../../components/buttons/BigButton';
import images from '../../assets/images';
import TextButton from '../../components/buttons/TextButton';
import MapContext from '../../contexts/MapContext';
import colors from '../../assets/colors';
const MatchResultScreen = ({navigation}) => {
  const {setStatus} = useContext(MapContext);

  const setMatchStatus = status => {
    setStatus(status);
    navigation.navigate('Promotion');
  };

  return (
    <CustomBackground header={'Rezultat Meczu'}>
      <View>
        <BigButton
          icon={images.icons.check_white}
          color={colors.green}
          text={'ZWYCIĘSTWO'}
          onPress={() => setMatchStatus('win')}
        />
        <BigButton
          icon={images.icons.equal_white}
          color={colors.yellow}
          text={'REMIS'}
          onPress={() => setMatchStatus('draw')}
        />
        <BigButton
          icon={images.icons.x_white}
          color={colors.red}
          text={'PORAŻKA'}
          onPress={() => setMatchStatus('lose')}
        />
        <TextButton onPress={() => navigation.navigate('Maps')} />
      </View>
    </CustomBackground>
  );
};

export default MatchResultScreen;
