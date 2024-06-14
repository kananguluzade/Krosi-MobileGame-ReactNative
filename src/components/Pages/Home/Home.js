import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import homeStyles from './HomeStyle';

const Home = () => {

  return (
    <View style={homeStyles.backgroundColor}>
      <ImageBackground
        source={require('./Group.png')}
        style={homeStyles.backgroundImage}>
        <View style={homeStyles.container}>
          <Text style={homeStyles.heroContent}>Söz ehtiyatın çoxdur?</Text>
          <Text style={homeStyles.helperContent}>oynamağa başla</Text>
          <TouchableOpacity
            style={homeStyles.button}>
            <Text style={homeStyles.buttonText}>Başla</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
