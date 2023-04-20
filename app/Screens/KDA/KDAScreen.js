import React, {useContext, useState} from 'react';
import CustomBackground from '../../components/background/CustomBackground';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BigButton from '../../components/buttons/BigButton';
import images from '../../assets/images';
import TextButton from '../../components/buttons/TextButton';
import {styles} from './KDAScreen.style';
import colors from '../../assets/colors';
import MapContext from '../../contexts/MapContext';

const Item = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        margin: 5,
        padding: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: props.selected ? 'white' : 'transparent',
      }}>
      <Text style={{fontSize: 20}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const KdaScreen = ({navigation}) => {
  const {setKills, setAsists, setDeaths} = useContext(MapContext);

  const [kills, setKillsLocal] = useState(0);
  const [asists, setAsistsLocal] = useState(0);
  const [death, setDeathsLocal] = useState(0);

  const showKills = () => {
    let view = [];

    for (let i = 0; i <= 100; i++) {
      if (i === kills) {
        view.push(<Item selected={true} text={i}></Item>);
      } else {
        view.push(
          <Item
            selected={false}
            text={i}
            onPress={() => setKillsLocal(i)}></Item>,
        );
      }
    }

    return view;
  };
  const showAsists = () => {
    let view = [];

    for (let i = 0; i <= 100; i++) {
      if (i === asists) {
        view.push(<Item selected={true} text={i}></Item>);
      } else {
        view.push(
          <Item
            selected={false}
            text={i}
            onPress={() => setAsistsLocal(i)}></Item>,
        );
      }
    }

    return view;
  };
  const showDeaths = () => {
    let view = [];

    for (let i = 0; i <= 100; i++) {
      if (i === death) {
        view.push(<Item selected={true} text={i}></Item>);
      } else {
        view.push(
          <Item
            selected={false}
            text={i}
            onPress={() => setDeathsLocal(i)}></Item>,
        );
      }
    }

    return view;
  };

  const saveStats = () => {
    setKills(kills);
    setAsists(asists);
    setDeaths(death);

    navigation.navigate('SaveMap', {skipped: false});
  };

  return (
    <CustomBackground header={'Statystyki'}>
      <View style={styles.statBox}>
        <Text>Kile</Text>
        <ScrollView horizontal={true} contentOffset={{x: 0, y: 0}}>
          {showKills()}
        </ScrollView>
      </View>
      <View style={styles.statBox}>
        <Text>Śmierci</Text>
        <ScrollView horizontal={true} contentOffset={{x: 0, y: 0}}>
          {showDeaths()}
        </ScrollView>
      </View>
      <View style={styles.statBox}>
        <Text>Asysty</Text>
        <ScrollView horizontal={true} contentOffset={{x: 0, y: 0}}>
          {showAsists()}
        </ScrollView>
      </View>
      <View style={{marginTop: 100}}>
        <TextButton
          text={'Zapisz'}
          color={colors.green}
          onPress={() => saveStats()}
        />

        <TextButton
          text={'Pomiń'}
          color={'#808080'}
          onPress={() => navigation.navigate('SaveMap', {skipped: true})}
        />

        <TextButton onPress={() => navigation.navigate('MatchResult')} />
      </View>
    </CustomBackground>
  );
};

export default KdaScreen;
