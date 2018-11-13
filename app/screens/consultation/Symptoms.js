import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';
import NoData from '../../components/noData';
import InfoItem from '../../components/infoItem';
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

  renderSymptoms = () => {
    if (this.state.symptoms.length === 0) return <NoData text='No symptoms available' />;

    return <FlatList
             data={this.state.symptoms}
             renderItem={this.renderSymptom}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderSymptom = ({ item }) => {
    const diff = moment(new Date(item.time_to)).diff(moment(new Date(item.time_from)));
    const duration = moment.duration(diff).humanize();
    return <InfoItem
             title={item.symptom.name}
             subTitle={`duration of ${duration}`}
             info={item.additional_info}
           />;
  };

  renderClinicalObservations = () => {
    if (this.state.clinicalObservations.length === 0) return <NoData text='No clinical observations available' />;

    return <FlatList
             data={this.state.clinicalObservations}
             renderItem={this.renderClinicalObservation}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderClinicalObservation = ({ item }) => {
    return <InfoItem title={item.exam} subTitle={item.result} info={item.interpretation} />;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkText rkType='header3' style={styles.sectionHeader}>Symptoms</RkText>
        {this.renderSymptoms()}
        <RkText rkType='header3' style={styles.sectionHeader}>Clinical Observations</RkText>
        {this.renderClinicalObservations()}
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
  }
}));
