import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import data from '../data';
import NavigationType from '../config/navigation/propTypes';

export default class Consultation extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  render() {
    return (
      <View>
        <RkText rkType='header2'>{'Consultation coming soon'}</RkText>
      </View>
    );
  }
};
