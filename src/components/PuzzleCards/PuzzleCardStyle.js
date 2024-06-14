import {StyleSheet} from 'react-native';

const PuzzleCardStyle = StyleSheet.create({
  container: {
    minHeight: 92,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    flex: 1,
    padding: 10,
  },
  puzzlesContainer: {
    maxWidth: 170,
  },
  puzzlesWords: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
  },
  puzzleLetterContainer: {
    flexDirection: 'row',
  },
});

export default PuzzleCardStyle;
