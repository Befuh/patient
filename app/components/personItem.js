import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Avatar } from './avatar';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';


export default class PersonItem extends React.Component {
  renderText() {
    if (!this.props.text) return null;

    return (
      <View>
        <RkText rkType='medium' style={styles.info}>{this.props.text}</RkText>
        <RkText rkType='subtitle' style={styles.info}>{this.props.text2}</RkText>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <RkText rkType='large' style={styles.title}>{this.props.title}</RkText>
        </View>
        <View style={styles.body}>
          <View style={styles.section}>
            <Avatar img={this.props.image} style={styles.image} rkType='circle' />
            <View style={styles.infoSection}>
              <RkText rkType='subtitle'>{this.props.infoTitle}</RkText>
              <RkText rkType='large'>{this.props.info}</RkText>
            </View>
          </View>
          {this.renderText()}
        </View>
      </View>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    height: 180,
    borderColor: theme.colors.border.base,
    backgroundColor: theme.colors.screen.base,
    marginHorizontal: 5,
    marginVertical: 5
  },
  header: {
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.border.base
  },
  title: {
    fontWeight: 'bold'
  },
  body: {
    height: 150
  },
  section: {
    flexDirection: 'row',
    height: 70,
  },
  image: {
    flex: 1
  },
  infoSection: {
    flex: 5,
    justifyContent: 'center'
  }
}));
