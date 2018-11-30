import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import moment from 'moment';
import NoData from '../../components/noData';
import { Info } from '../../components/info';
import SectionHeader from '../../components/sectionHeader';
import data from '../../data';
import i18n from '../../i18n';

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

  componentWillMount() {
    moment.locale = i18n.currentLocale();
  }

  renderSymptoms = () => {
    if (this.state.symptoms.length === 0) return <NoData text={i18n.t('consultation.symptom.noData')} />;

    return <FlatList
             data={this.state.symptoms}
             renderItem={this.renderSymptom}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderSymptom = ({ item }) => {
    const diff = moment(new Date(item.time_to)).diff(moment(new Date(item.time_from)));
    const duration = moment.duration(diff).humanize();
    return <Info
             title={item.symptom.name}
             subTitle={`duration of ${duration}`}
             info={item.additional_info}
           />;
  };

  renderClinicalObservations = () => {
    if (this.state.clinicalObservations.length === 0) return <NoData text={i18n.t('consultation.clinicalObservation.noData')} />;

    return <FlatList
             data={this.state.clinicalObservations}
             renderItem={this.renderClinicalObservation}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderClinicalObservation = ({ item }) => {
    return <Info title={item.exam} subTitle={item.result} info={item.interpretation} />;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <SectionHeader heading={i18n.t('consultation.symptom.title')} />
        {this.renderSymptoms()}
        <SectionHeader heading={i18n.t('consultation.clinicalObservation.title')} />
        {this.renderClinicalObservations()}
      </ScrollView>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  root: {
  }
}));
