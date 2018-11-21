import React from 'react';
import { Image, View } from 'react-native';
import { RkComponent, RkText } from 'react-native-ui-kitten';

export class Info extends RkComponent {
  componentName = 'Info';
  typeMapping = { section: {}, header: {}, info: {}, title: {}, subTitle: {} };

  render() {
    const styles = this.defineStyles();
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
}
