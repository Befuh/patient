import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import NoData from '../../components/noData';
import { Info } from '../../components/info';
import SectionHeader from '../../components/sectionHeader';
import data from '../../data';
import i18n from '../../i18n';

export default class Treatments extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  constructor(props) {
    super(props);

    const timestamp = props.navigation.state.params.timestamp;

    this.state = { treatments: data.getTreatments(timestamp) };
  }

  renderTreatments = () => {
    if (this.state.treatments.length === 0) return <NoData text={i18n.t('consultation.treatment.noData')} />;

    return <FlatList
             data={this.state.treatments}
             renderItem={this.renderTreatment}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderTreatment = ({ item }) => {
    return <Info title={item.type} subTitle={''} info={item.description} />;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <SectionHeader heading={i18n.t('consultation.treatment.title')} />
        {this.renderTreatments()}
      </ScrollView>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  root: {
  }
}));
