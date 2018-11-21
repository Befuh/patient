import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation';
import { Info } from '../components/info';
import NavigationType from '../config/navigation/propTypes';
import data from '../data';

class HospitalsList extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  state = { data: data.getHospitals() };

  renderHospital = ({ item }) => {
    return <Info title={item.name} subTitle={item.city} info={item.departments} rkType='big'/>;
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderHospital}
          keyExtractor={(hospital, index) => index.toString()}
        />
      </ScrollView>
    );
  }
};

const Hospitals = createStackNavigator({
  hospitalsList: {
    screen: HospitalsList,
    path: '/',
    navigationOptions: {
      title: 'Hospitals'
    }
  }
});

const styles = RkStyleSheet.create(theme => ({
  root: {
    paddingVertical: 5
  }
}));


export default Hospitals
