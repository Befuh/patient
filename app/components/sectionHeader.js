import React from 'react';
import PropTypes from 'prop-types';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';

export default class SectionHeader extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired
  };

  render() {
    return <RkText rkType='header3' style={styles.sectionHeader}>{this.props.heading}</RkText>;
  }
};

const styles = RkStyleSheet.create(theme => ({
  sectionHeader: {
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 5
  }
}));
