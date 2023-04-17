import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './HomeScreen.style';
import CustomBackground from '../../components/background/CustomBackground';
import {openDatabase} from 'react-native-sqlite-storage';
import MapButton from '../../components/maps/MapButton';

const db = openDatabase({
  name: 'matches',
});
const HomeScreen = () => {
  const [maps, setMaps] = useState([]);
  const getMaps = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM maps;', [], (sqlTxn, res) => {
        let len = res.rows.length;
        if (len > 0) {
          let maps = [];
          for (let i = 0; i < len; i++) {
            maps.push(res.rows.item(i));
          }
          setMaps(maps);
        }
      });
    });
  };

  useEffect(() => {
    getMaps();
  }, []);

  function showMaps() {
    let view = [];

    maps.map((item, index) => {
      view.push(<MapButton name={item.map} slug={item.slug} key={index} />);
    });

    return view;
  }

  return <CustomBackground>{showMaps()}</CustomBackground>;
};

export default HomeScreen;
