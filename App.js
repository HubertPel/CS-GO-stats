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
    let mapExists = db.transaction(txn => {
      return txn.executeSql(
        'SELECT * FROM maps WHERE id=1',
        [],
        res => {
          console.log('w select');
          if (res.items.length == 0) {
            db.transaction(txn => {
              txn.executeSql(
                'INSERT INTO maps (id, map,slug,type) VALUES' +
                  '(1, "Boyard", "boyard", "wingman"),' +
                  '(2, "Chalice", "chalice", "wingman"),' +
                  '(3, "Vertigo","vertigo", "wingman"),' +
                  '(4, "Inferno","inferno", "wingman"),' +
                  '(5, "Overpass", "overpass", "wingman"),' +
                  '(6, "Cobblestone","cobblestone", "wingman"),' +
                  '(7, "Train", "train", "wingman"),' +
                  '(8, "Nuke","nuke", "wingman"),' +
                  '(9, "Shortdust","shortdust", "wingman"),' +
                  '(10, "Lake","lake", "wingman");',
                [],
                sqlTxn => {
                  console.log('insert Created');
                },
                error => {
                  console.log(error);
                },
              );
            });
          }
        },
        error => {
          console.log(error);
        },
      );
    });
    console.log(mapExists);
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
      txn.executeSql('DROP TABLE map;', [], (sqlTxn, res) => {
        console.log('usnieto mecze');
      });
    });
  };

  useEffect(() => {
    createTable();
    createMapTable();
    insertMapData();
    //getMaps();
    //dropMatches();
  }, []);

  return <AppNavigator />;
};

export default App;
