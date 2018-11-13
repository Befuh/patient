import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import NoData from '../../components/noData';
import InfoItem from '../../components/infoItem';
import data from '../../data';

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
    if (this.state.labResults.length === 0) return <NoData text='No lab results available' />;

    return <RkText rkType='large'>Coming soon...</RkText>;
  };

  renderDiagnoses = () => {
    if (this.state.diagnoses.length === 0) return <NoData text='No diagnoses available' />;

    return <FlatList
             data={this.state.diagnoses}
             renderItem={this.renderDiagnosis}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderDiagnosis = ({ item }) => {
    return <InfoItem
             title={item.name}
             subTitle={''}
             info={''}
           />;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkText rkType='header3' style={styles.sectionHeader}>Lab Results</RkText>
        {this.renderLabResults()}
        <RkText rkType='header3' style={styles.sectionHeader}>Diagnoses</RkText>
        {this.renderDiagnoses()}
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
