import React, {useEffect, useState} from 'react';
import MapButton from '../../components/maps/MapButton';
import CustomBackground from '../../components/background/CustomBackground';

const MapsScreen = () => {
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
      view.push(<MapButton name={item.map} key={index} />);
    });

    return view;
  }

  return <CustomBackground>{showMaps()}</CustomBackground>;
};

export default MapsScreen;
