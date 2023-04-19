import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import CustomBackground from '../../components/background/CustomBackground';
import BigButton from '../../components/buttons/BigButton';
import images from '../../assets/images';
import TextButton from '../../components/buttons/TextButton';
import MapContext from '../../contexts/MapContext';
const MatchResultScreen = ({navigation}) => {
  const {setStatus} = useContext(MapContext);

  const setMatchStatus = status => {
    setStatus(status);
    navigation.navigate('Promotion');
  };

  return (
    <CustomBackground>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rezultat Meczu</Text>
      </View>
      <View>
        <BigButton
          icon={images.icons.check_white}
          color={'#29a603'}
          text={'ZWYCIĘSTWO'}
          onPress={() => setMatchStatus('win')}
        />
        <BigButton
          icon={images.icons.equal_white}
          color={'#c48d0c'}
          text={'REMIS'}
          onPress={() => setMatchStatus('draw')}
        />
        <BigButton
          icon={images.icons.x_white}
          color={'#b30909'}
          text={'PORAŻKA'}
          onPress={() => setMatchStatus('lose')}
        />
        <TextButton onPress={() => navigation.navigate('Maps')} />
      </View>
    </CustomBackground>
  );
};

export default MatchResultScreen;
