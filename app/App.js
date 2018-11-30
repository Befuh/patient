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
import RNLanguages from 'react-native-languages';
import i18n from './i18n';


bootstrap();

const PatientApp = createBottomTabNavigator({
  consultations: {
    screen: Consultations,
    path: 'cons',
    navigationOptions: {
      tabBarLabel: i18n.t('consultation.menuTitle'),
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
      tabBarLabel: i18n.t('doctor.menuTitle'),
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
      tabBarLabel: i18n.t('hospital.menuTitle'),
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name='ios-pin'
          size={horizontal ? 20 : 26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  profile: {
    screen: Profile,
    path: '',
    navigationOptions: {
      tabBarLabel: i18n.t('profile.menuTitle'),
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name='ios-person'
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

  componentWillMount() {
    RNLanguages.addEventListener('change', this._onLanguagesChange);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    i18n.locale = language;
  };

  render() {
    return <PatientApp />;
  }
}
