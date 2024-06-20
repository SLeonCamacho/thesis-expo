import React from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';
import AppsList from './appsList.jsx';

const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <AppsList />
    </View>
  );
}

export default Main;