import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import NoData from '../../components/noData';
import InfoItem from '../../components/infoItem';
import SectionHeader from '../../components/sectionHeader';
import data from '../../data';

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
    if (this.state.treatments.length === 0) return <NoData text='No treatments available' />;

    return <FlatList
             data={this.state.treatments}
             renderItem={this.renderTreatment}
             keyExtractor={(symptom, index) => index.toString()}
           />;
  };

  renderTreatment = ({ item }) => {
    return <InfoItem title={item.type} subTitle={''} info={item.description} />;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <SectionHeader heading={'Treatments'} />
        {this.renderTreatments()}
      </ScrollView>
    );
  }
};

const styles = RkStyleSheet.create(theme => ({
  root: {
  }
}));
