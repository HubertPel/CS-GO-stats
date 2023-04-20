import React, {useContext, useEffect, useState} from 'react';
import MapButton from '../../components/maps/MapButton';
import CustomBackground from '../../components/background/CustomBackground';
import {openDatabase} from 'react-native-sqlite-storage';
import {Text, View} from 'react-native';
import MapContext from '../../contexts/MapContext';

const db = openDatabase({
  name: 'matches',
});
const MapsScreen = ({navigation}) => {
  const {setMap, map, matchType} = useContext(MapContext);
  const [maps, setMaps] = useState([]);
  const getMaps = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM maps where type = ?;',
        [matchType],
        (sqlTxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let maps = [];
            for (let i = 0; i < len; i++) {
              maps.push(res.rows.item(i));
            }
            setMaps(maps);
          }
        },
      );
    });
  };

  useEffect(() => {
    getMaps();
  }, []);

  function showMaps() {
    let view = [];

    maps.map((item, index) => {
      view.push(
        <MapButton
          name={item.map}
          slug={item.slug}
          key={index}
          onPress={props => {
            setMap(item.slug);
            navigation.navigate('MatchResult');
          }}
        />,
      );
    });

    return view;
  }

  return (
    <CustomBackground header={'Wybierz ostatnio graną mapę'}>
      {showMaps()}
      <View style={{marginTop: 50}}></View>
    </CustomBackground>
  );
};

export default MapsScreen;
