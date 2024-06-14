import React, {useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import gameStyles from './GameStyle';
import PuzzleLetter from '../../PuzzleLetters/PuzzleLetter';
import PuzzleCard from '../../PuzzleCards/PuzzleCard';

const Game = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleCardPress = cardIndex => {
    setSelectedCard(cardIndex);
  };

  const handleInputChange = value => {
    setInputValue(value);
  };
  return (
    <View style={gameStyles.container}>
      <View style={gameStyles.topContainer}>
        <View style={gameStyles.wordContainer}>
          {[0, 1, 2, 3, 4].map(PuzzleLetter)}
        </View>
        <View style={gameStyles.wordContainer}>
          {[0, 1, 2, 3, 4].map(PuzzleLetter)}
        </View>
        <View style={gameStyles.wordContainer}>
          {[0, 1, 2, 3, 4].map(PuzzleLetter)}
        </View>
      </View>
      <View style={gameStyles.bottomContainer}>
        <ImageBackground
          source={require('../Home/Group.png')}
          style={gameStyles.backgroundImage}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={gameStyles.puzzlesCards}>
              <ScrollView>
                {[0, 1, 2, 3, 4].map(cardIndex => (
                  <TouchableOpacity
                    key={cardIndex}
                    onPress={() => handleCardPress(cardIndex)}
                    style={[
                      gameStyles.cardContainer,
                      {
                        backgroundColor:
                          selectedCard === cardIndex
                            ? 'rgba(255, 111, 111, 0.64)'
                            : '#7689FF',
                      },
                    ]}>
                    <PuzzleCard
                      selectedCard={selectedCard}
                      isTextInput={selectedCard === cardIndex}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Game;
