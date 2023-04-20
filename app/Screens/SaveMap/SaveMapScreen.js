import React, {useContext, useEffect, useState} from 'react';
import CustomBackground from '../../components/background/CustomBackground';
import {ScrollView, Text, View} from 'react-native';
import TextButton from '../../components/buttons/TextButton';
import colors from '../../assets/colors';
import {styles} from './SaveMapScreen.style';
import MapContext from '../../contexts/MapContext';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({
  name: 'matches',
});
const SaveMapScreen = ({navigation}) => {
  const {map, status, promStatus, kills, deaths, asists, cleanMap, matchType} =
    useContext(MapContext);
  const route = useRoute();

  const [mapName, setMapName] = useState('');
  const [statusName, setStatusName] = useState('');
  const [promStatusName, setPromStatusName] = useState('');
  const [kda, setKda] = useState('');

  const getMap = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM maps WHERE slug = ? LIMIT 1;',
        [map],
        (sqlTxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              setMapName(res.rows.item(i).map);
            }
          }
        },
      );
    });
  };

  const getStatus = () => {
    if (status == 'draw') {
      setStatusName('Remis');
    } else if (status == 'win') {
      setStatusName('Zwycięstwo');
    } else if (status == 'lose') {
      setStatusName('Porażka');
    } else {
      setStatusName('Brak');
    }
  };

  const getProm = () => {
    if (promStatus == 'prom') {
      setPromStatusName('Awans');
    } else if (promStatus == 'drop') {
      setPromStatusName('Spadek');
    } else {
      setPromStatusName('Utrzymanie');
    }
  };

  const getKDA = () => {
    if (route.params.skipped === true) {
      setKda('Nie podano');
    } else {
      setKda(kills + '/' + deaths + '/' + asists);
    }
  };

  const saveMatch = () => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO matches (status, map, kills, deads, asists, promotion_status, type) VALUES (?,?,?,?,?,?,?);',
        [status, map, kills, deaths, asists, promStatus, matchType],
        (sqlTxn, res) => {
          cleanMap();
          navigation.navigate('Dashboard');
        },
      );
    });
  };

  useFocusEffect(() => {
    getMap();
    getStatus();
    getProm();
    getKDA();
  });

  return (
    <CustomBackground header={'Podsumowanie'}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>MAPA:</Text>
        <Text style={styles.resultText}>{mapName}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>STATUS:</Text>
        <Text style={styles.resultText}>{statusName}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>AWANS:</Text>
        <Text style={styles.resultText}>{promStatusName}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>KDA:</Text>
        <Text style={styles.resultText}>{kda}</Text>
      </View>
      <View style={{marginTop: 100}}>
        <TextButton
          text={'Zapisz'}
          color={colors.green}
          onPress={() => saveMatch()}
        />

        <TextButton onPress={() => navigation.navigate('KDA')} />
      </View>
    </CustomBackground>
  );
};

export default SaveMapScreen;
