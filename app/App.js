import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Profile from './screens/Profile';
import Consultations from './screens/Consultations';

const PatientApp = createStackNavigator({
  profile: { screen: Profile },
  consultations: { screen: Consultations }
}, { initialRouteName: 'profile' });

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PatientApp />
      </View>
    );
  }
}
