import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
    backgroundColor: '#556BF4',
  },
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
  },
  heroContent: {
    fontSize: 48,
    fontWeight: '800',
    color: 'white',
    marginBottom: 12,
    fontFamily: 'Poppins',
  },
  helperContent: {
    fontSize: 20,
    color: 'white',
    marginBottom: 103,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 36,
    color: '#758BFD',
    fontWeight: '800',
    fontFamily: 'Poppins',
  },
});

export default homeStyles;
