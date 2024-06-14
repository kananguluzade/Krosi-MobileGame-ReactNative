import React, {useEffect, useRef, useState} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import PuzzleLetterStyle from './PuzzleLetterStyle';

const PuzzleLetter = ({
  isTextInput,
  selectedCard,
  selectedLetter,
  setSelectedLetter,
}) => {
  const textInputRef = useRef(null);
  const [textInputValue, setTextInputValue] = useState('');
  // const isInputFocused = textInputRef.current?._inputElement?.isFocused();

  const focusOnTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    focusOnTextInput();
  }, [selectedCard, selectedLetter]);

  const handleTextChange = text => {
    setTextInputValue(text);
    updateTextInputStyle(text);
  };

  const updateTextInputStyle = text => {
    if (text.length === 1) {
      textInputRef.current.setNativeProps({
        style: {backgroundColor: '#DCF3F3', border: '#DCF3F3'},
      });
      setSelectedLetter(selectedLetter + 1);
      
    } else {
      textInputRef.current.setNativeProps({
        style: {backgroundColor: 'transparent'},
      });
    }
  };

  if (isTextInput || textInputValue.length === 1) {
    return (
      <View style={PuzzleLetterStyle.activeContainer}>
        <TextInput
          style={PuzzleLetterStyle.textInput}
          maxLength={1}
          keyboardType="default"
          underlineColorAndroid="transparent"
          ref={textInputRef}
          value={textInputValue}
          onChangeText={handleTextChange}
          onFocus={() => {
            console.log(selectedLetter +'TextInput odaklandı');
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && selectedLetter !== 0) {
              setSelectedLetter(selectedLetter - 1);
            }
          }}
        />
        <View style={PuzzleLetterStyle.activeCardNumber}>
          <Text style={PuzzleLetterStyle.number}>2</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={PuzzleLetterStyle.container}>
      <Image source={require('./_.png')} style={PuzzleLetterStyle.image} />
      <View style={PuzzleLetterStyle.cardNumber}>
        <Text style={PuzzleLetterStyle.number}>2</Text>
      </View>
    </View>
  );
};

export default PuzzleLetter;
