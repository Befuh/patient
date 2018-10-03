import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Consultations extends React.Component {
  static navigationOptions = {
    title: 'Consultations'.toUpperCase(),
    tabBarLabel: 'Consultations',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Ionicons
        name='ios-list'
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View>
        <RkText rkType='header2'>{'Consultations coming soon'}</RkText>
      </View>
    );
  }
};
