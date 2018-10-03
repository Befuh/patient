import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './screens/Profile';
import Consultations from './screens/Consultations';
import Doctors from './screens/Doctors';
import Hospitals from './screens/Hospitals';

const PatientApp = createBottomTabNavigator({
  profile: { screen: Profile, path: '' },
  consultations: { screen: Consultations, path: 'cons' },
  doctors: { screen: Doctors, path: 'docs' },
  hospitals: { screen: Hospitals, path: 'hos' }
}, { tabBarOptions: {
      activeTintColor: '#2fb5ae'
   }
});

export default class App extends Component {
  render() {
    return <PatientApp />;
  }
}
