import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Home from '../src/components/Pages/Home/Home';
import Game from './components/Pages/GameInside/Game';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <Game></Game>
    </SafeAreaView>
  );
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
