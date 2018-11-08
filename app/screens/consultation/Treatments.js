import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';
import NoData from '../../components/noData';
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

    return <RkText rkType='large'>Coming soon...</RkText>;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkText rkType='header3' style={styles.sectionHeader}>Treatments</RkText>
        {this.renderTreatments()}
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
