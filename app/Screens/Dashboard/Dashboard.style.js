import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  rankBigBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  statsBoxTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statsBoxSubTilte: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  matchType: {
    backgroundColor: colors.green,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  matchTypeButton: {
    textAlign: 'center',
    color: colors.white,
  },
  statsResultMatches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
