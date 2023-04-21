import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomBackground from '../../components/background/CustomBackground';
import {styles} from './Dashboard.style';
import MapContext from '../../contexts/MapContext';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
import SmallMatchResultBox from '../../components/boxes/SmallMatchResultBox';
const db = openDatabase({
  name: 'matches',
});
const Dashboard = ({navigation}) => {
  const {setMatchType} = useContext(MapContext);
  const route = useRoute();

  const [wingmanMatches, setWingmanMatches] = useState([]);
  const addMatch = type => {
    setMatchType(type);

    navigation.navigate('Maps');
  };

  const getWingmanMatches = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM matches WHERE type = "wingman" ORDER BY id DESC LIMIT 18;',
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let matches = [];
            setWingmanMatches([]);
            for (let i = 0; i < len; i++) {
              console.log(res.rows.item(i));
              matches.push(res.rows.item(i));
            }

            setWingmanMatches(matches);
          }
        },
      );
    });
  };

  const showWingmanMatches = () => {
    let view = [];
    wingmanMatches.map((item, index) => {
      view.push(
        <SmallMatchResultBox
          result={item.status}
          prom={item.promotion_status}
          key={'wingman-result-'+index}
        />,
      );
    });
    return view;
  };

  useFocusEffect(
    useCallback(() => {
      getWingmanMatches();
    }, []),
  );

  return (
    <CustomBackground header={'Dashboard'}>
      <View style={styles.rankBigBox}>
        <View>
          <Text style={styles.statsBoxTitle}>5vs5</Text>
          <View>
            <Text style={styles.statsBoxSubTilte}>Twoja ranga</Text>
            <Text>In progress</Text>
          </View>
          <View>
            <Text style={styles.statsBoxSubTilte}>Ostatnie mecze</Text>
            <Text>In progress</Text>
          </View>
        </View>
      </View>
      <View style={styles.rankBigBox}>
        <View>
          <Text style={styles.statsBoxTitle}>Wingman</Text>
          <View>
            <Text style={styles.statsBoxSubTilte}>Twoja ranga</Text>
            <Text>In progress</Text>
          </View>
          <View>
            <Text style={styles.statsBoxSubTilte}>Ostatnie mecze</Text>
            <View style={styles.statsResultMatches}>
              {showWingmanMatches()}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.matchType}
          onPress={() => addMatch('5vs5')}>
          <Text style={styles.matchTypeButton}>Dodaj mecz 5vs5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.matchType}
          onPress={() => addMatch('wingman')}>
          <Text style={styles.matchTypeButton}>Dodaj mecz Wingman</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 50}}></View>
    </CustomBackground>
  );
};

export default Dashboard;
