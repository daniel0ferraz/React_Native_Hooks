import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};

export default App;
