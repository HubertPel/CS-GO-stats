import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import AppNavigator from './app/app.navigator';

const db = openDatabase({
  name: 'matches',
});

const App = () => {
  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS matches (' +
          'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
          'type varchar(20),' +
          'status varchar(20),' +
          'map VARCHAR(200),' +
          'kills INTEGER,' +
          'deads INTEGER,' +
          'asists INTEGER,' +
          'promotion_status VARCHAR(5),' +
          'created_at NOT NULL DEFAULT CURRENT_TIMESTAMP' +
          ');',
        [],
        sqlTxn => {
          console.log('table matches Created');
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  const createMapTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS  maps (' +
          'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
          'map varchar(200),' +
          'slug varchar(200),' +
          'type varchar(100)' +
          ');',
        [],
        sqlTxn => {
          console.log('table map Created');
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  const insertMapData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO maps (map,slug,type) VALUES' +
          '("Boyard", "boyard", "wingman"),' +
          '("Chalice", "chalice", "wingman"),' +
          '("Vertigo","vertigo", "wingman"),' +
          '("Inferno","inferno", "wingman"),' +
          '("Overpass", "overpass", "wingman"),' +
          '("Cobblestone","cobblestone", "wingman"),' +
          '("Train", "train", "wingman"),' +
          '("Nuke","nuke", "wingman"),' +
          '("Shortdust","shortdust", "wingman"),' +
          '("Lake","lake", "wingman");',
        [],
        sqlTxn => {
          console.log('insert Created');
        },
        error => {
          console.log(error);
        },
      );
    });
  };
  const insertUsers = () => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO categories (name) VALUES ("test");',
        [],
        sqlTxn => {
          console.log('insert Created');
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  const getMaps = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM maps;', [], (sqlTxn, res) => {
        console.log('succss');
        let len = res.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            console.log(res.rows.item(i));
          }
        }
      });
    });
  };

  const dropMatches = () => {
    db.transaction(txn => {
      txn.executeSql('DROP TABLE matches;', [], (sqlTxn, res) => {
        console.log('usnieto mecze');
      });
    });
  };

  useEffect(() => {
    createTable();
    createMapTable();
    // insertMapData();
    //getMaps();
    //dropMatches();
  }, []);

  return <AppNavigator />;
};

export default App;
