import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation';
import PersonItem from '../components/personItem';
import NavigationType from '../config/navigation/propTypes';
import data from '../data';

const photo = require('../data/img/avatars/person.png');

class DoctorsList extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  state = { data: data.getDoctors() };

  renderDoctor = ({ item }) => {
    return (
      <PersonItem
        image={photo}
        title={`${item.salutation} ${item.name}`}
        infoTitle={'Specialization'}
        info={item.speciality}
        text={item.health_facility.name}
        text2={item.health_facility.address}
      />
    );
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderDoctor}
          keyExtractor={(consultation, index) => index.toString()}
        />
      </ScrollView>
    );
  }
};

const Doctors = createStackNavigator({
  doctorsList: {
    screen: DoctorsList,
    path: '/',
    navigationOptions: {
      title: 'My Doctors'
    }
  }
});

const styles = RkStyleSheet.create(theme => ({
  root: {
    paddingVertical: 5
  }
}));


export default Doctors
