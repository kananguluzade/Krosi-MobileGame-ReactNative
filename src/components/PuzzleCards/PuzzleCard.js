import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PuzzleCardStyle from './PuzzleCardStyle';
import PuzzleLetter from '../PuzzleLetters/PuzzleLetter';

const PuzzleCard = ({selectedCard, isTextInput}) => {
  const [selectedLetter, setSelectedLetter] = useState(0);

  const handleCardPress = index => {
    setSelectedLetter(index);
    console.log(selectedLetter);
  };

  return (
    <View style={PuzzleCardStyle.container}>
      <View style={PuzzleCardStyle.puzzlesContainer}>
        <Text style={PuzzleCardStyle.puzzlesWords}>
          Binanın çölə baxan əsas qabaq tərəfi; ön tərəf.
        </Text>
      </View>
      <View style={PuzzleCardStyle.puzzleLetterContainer}>
        {[0, 1, 2, 3, 4].map(index => (
          <TouchableOpacity onPress={() => handleCardPress(index)} key={index}>
            <PuzzleLetter
              isTextInput={isTextInput === true && index === selectedLetter}
              selectedCard={selectedCard}
              selectedLetter={selectedLetter}
              setSelectedLetter={setSelectedLetter}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PuzzleCard;
