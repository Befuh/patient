import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Profile from './screens/Profile';
import Consultations from './screens/Consultations';
import Doctors from './screens/Doctors';
import Hospitals from './screens/Hospitals';
import { bootstrap } from './config/bootstrap';
import { KittenTheme } from './config/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';


bootstrap();

const PatientApp = createBottomTabNavigator({
  profile: {
    screen: Profile,
    path: '',
    navigationOptions: {
      title: 'User Profile'.toUpperCase(),
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name='ios-person'
          size={horizontal ? 20 : 26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  consultations: {
    screen: Consultations,
    path: 'cons',
    navigationOptions: {
      title: 'Consultations'.toUpperCase(),
      tabBarLabel: 'Consultations',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name='ios-list'
          size={horizontal ? 20 : 26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  doctors: {
    screen: Doctors,
    path: 'docs',
    navigationOptions: {
      title: 'Doctors'.toUpperCase(),
      tabBarLabel: 'Doctors',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name='ios-pulse'
          size={horizontal ? 20 : 26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  hospitals: {
    screen: Hospitals,
    path: 'hos',
    navigationOptions: {
      title: 'Hospitals'.toUpperCase(),
      tabBarLabel: 'Hospitals',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name='ios-pin'
          size={horizontal ? 20 : 26}
          style={{ color: tintColor }}
        />
      )
    }
  }
}, { tabBarOptions: {
      activeTintColor: KittenTheme.colors.primary
   }
});

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <PatientApp />;
  }
}
