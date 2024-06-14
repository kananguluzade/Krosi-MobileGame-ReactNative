import {StyleSheet} from 'react-native';

const gameStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: '#7689FF',
    minHeight: 92,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#7689FF',
  },
  topContainer: {
    backgroundColor: '#7689FF',
    padding: 30,
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#556BF4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 14,
    paddingRight: 14,
  },
  puzzlesCards: {
    paddingTop: 40,
    paddingBottom: 20,
  },
});

export default gameStyles;
