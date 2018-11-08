import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';
import data from '../../data';

moment.locale = DeviceInfo.getDeviceLocale();

export default class Symptoms extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  constructor(props) {
    super(props);

    const timestamp = props.navigation.state.params.timestamp;

    this.state = {
      symptoms: data.getSymptoms(timestamp),
      clinicalObservations: data.getClinicalObservations(timestamp)
    };
  }

  renderSymptom = ({ item }) => {
    const diff = moment(new Date(item.time_to)).diff(moment(new Date(item.time_from)));
    const duration = moment.duration(diff).humanize();
    return (
      <View style={styles.section}>
        <View style={styles.header}>
          <RkText rkType='large' style={styles.title}>{item.symptom.name}</RkText>
          <RkText rkType='subtitle' style={styles.subHeading}>duration of {duration}</RkText>
        </View>
        <RkText rkType='small' style={styles.info}>{item.additional_info}</RkText>
      </View>
    );
  };

  renderClinicalObservation = ({ item }) => {
    return (
      <View style={styles.section}>
        <View style={styles.header}>
          <RkText rkType='large' style={styles.title}>{item.exam}</RkText>
          <RkText rkType='subtitle' style={styles.subHeading}>{item.result}</RkText>
        </View>
        <RkText rkType='small' style={styles.info}>{item.interpretation}</RkText>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkText rkType='header3' style={styles.sectionHeader}>Symptoms</RkText>
        <FlatList
          data={this.state.symptoms}
          renderItem={this.renderSymptom}
          keyExtractor={(symptom, index) => index.toString()}
        />
        <RkText rkType='header3' style={styles.sectionHeader}>Clinical Observations</RkText>
        <FlatList
          data={this.state.clinicalObservations}
          renderItem={this.renderClinicalObservation}
          keyExtractor={(symptom, index) => index.toString()}
        />
      </ScrollView>
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
  subHeading: {
    flex: 1,
    textAlign: 'right'
  },
  info: {
    height: 40,
    justifyContent: 'flex-end'
  },
  bold: {
    fontWeight: 'bold'
  }
}));
