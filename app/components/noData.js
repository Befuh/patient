import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NoData extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <MaterialCommunityIcons name='playlist-remove' size={30} style={styles.icon}/>
          <RkText rkType='subtitle hintColor'>{this.props.text}</RkText>
        </View>
      </View>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  root: {
    height: 120,
    borderWidth: 1,
    borderColor: theme.colors.border.base,
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    textAlign: 'center'
  },
  icon: {
    textAlign: 'center',
    color: theme.colors.text.hint
  }
}));
