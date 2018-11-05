import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import data from '../../data';

export default class Symptoms extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { symptoms: data.getSymptoms(props.navigation.state.params.timestamp) };
  }

  renderSymptom = ({ item }) => {
    return (
      <View style={styles.section}>
        <View style={styles.header}>
          <RkText rkType='large' style={styles.symptom}>{item.symptom.name}</RkText>
          <RkText rkType='subtitle' style={styles.duration}>{item.time_from}</RkText>
        </View>
        <RkText rkType='small'>{item.additional_info}</RkText>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.root}>
        <RkText rkType='header3' style={styles.sectionHeader}>Symptoms</RkText>
        <ScrollView>
          <FlatList
            data={this.state.symptoms}
            renderItem={this.renderSymptom}
            keyExtractor={(symptom, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  root: {
  },
  sectionHeader: {
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 5
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    height: 102,
    borderColor: theme.colors.border.base,
    backgroundColor: theme.colors.screen.base
  },
  header: {
    flexDirection: 'row',
    height: 40
  },
  symptom: {
    flex: 1
  },
  duration: {
    flex: 1
  },
  bold: {
    fontWeight: 'bold'
  }
}));
