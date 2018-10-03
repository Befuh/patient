import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Hospitals extends React.Component {
  static navigationOptions = {
    title: 'Hospitals'.toUpperCase(),
    tabBarLabel: 'Hospitals',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Ionicons
        name='ios-pin'
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View>
        <RkText rkType='header2'>{'Hospitals coming soon'}</RkText>
      </View>
    );
  }
};
