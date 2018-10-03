import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Doctors extends React.Component {
  static navigationOptions = {
    title: 'Doctors'.toUpperCase(),
    tabBarLabel: 'Doctors',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Ionicons
        name='ios-pulse'
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View>
        <RkText rkType='header2'>{'Doctors coming soon'}</RkText>
      </View>
    );
  }
};
