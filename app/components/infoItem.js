import React from 'react';
import { View } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';

export default class InfoItem extends React.Component {
  render() {
    return (
      <View style={styles.section}>
        <View style={styles.header}>
          <RkText rkType='large' style={styles.title}>{this.props.title}</RkText>
          <RkText rkType='subtitle' style={styles.subTitle}>{this.props.subTitle}</RkText>
        </View>
        <RkText rkType='small' style={styles.info}>{this.props.info}</RkText>
      </View>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  section: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    height: 80,
    borderColor: theme.colors.border.base,
    backgroundColor: theme.colors.screen.base
  },
  header: {
    flexDirection: 'row',
    height: 40
  },
  title: {
    flex: 1
  },
  subTitle: {
    flex: 1,
    textAlign: 'right'
  },
  info: {
    height: 40,
    justifyContent: 'flex-end'
  }
}));
