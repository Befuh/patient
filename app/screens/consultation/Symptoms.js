import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';

export default class Symptoms extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  render() {
    return (
      <View>
        <RkText rkType='header2'>{'Symptoms coming soon'}</RkText>
      </View>
    );
  }
};
