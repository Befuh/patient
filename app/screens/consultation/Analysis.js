import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import NoData from '../../components/noData';
import { Info } from '../../components/info';
import SectionHeader from '../../components/sectionHeader';
import data from '../../data';
import i18n from '../../i18n';

export default class Analysis extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  constructor(props) {
    super(props);

    const timestamp = props.navigation.state.params.timestamp;

    this.state = {
      labResults: data.getLabResults(timestamp),
      diagnoses: data.getDiagnoses(timestamp)
    };
  }

  renderLabResults = () => {
    if (this.state.labResults.length === 0) return <NoData text={i18n.t('consultation.labResult.noData')} />;

    return <RkText rkType='large'>Coming soon...</RkText>;
  };

  renderDiagnoses = () => {
    if (this.state.diagnoses.length === 0) return <NoData text={i18n.t('consultation.diagnosis.noData')} />;

    return <FlatList
             data={this.state.diagnoses}
             renderItem={this.renderDiagnosis}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderDiagnosis = ({ item }) => {
    return <Info
             title={item.name}
             subTitle={''}
             info={''}
           />;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <SectionHeader heading={i18n.t('consultation.labResult.title')} />
        {this.renderLabResults()}
        <SectionHeader heading={i18n.t('consultation.diagnosis.title')} />
        {this.renderDiagnoses()}
      </ScrollView>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  root: {
  }
}));
