import React from 'react';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import data from '../data';
import { createStackNavigator } from 'react-navigation';
import Consultation from './Consultation';
import format from '../utils/format';
import NavigationType from '../config/navigation/propTypes';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ConsultationsList extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  state = { data: data.getConsultations() };

  onItemPressed = ({ item }) => {
    this.props.navigation.navigate('Consultation', { timestamp: item.timestamp });
  }

  renderConsultation = ({ item }) => {
    const date = new Date(item.timestamp);
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        style={styles.consul}
        onPress={() => this.props.navigation.navigate('consultation', { timestamp: item.timestamp })}>
        <View style={styles.dateSection}>
          <View style={styles.date}>
            <RkText rkType='large' style={styles.bold}>{format.dateNumber(date.getDate())}</RkText>
            <RkText rkType='subtitle hintColor'>{monthNames[date.getMonth()].toUpperCase()}</RkText>
            <RkText rkType='subtitle hintColor'>{date.getFullYear()}</RkText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.state.data}
          renderItem={this.renderConsultation}
          keyExtractor={(consultation, index) => index.toString()}
          style={styles.root}
        />
      </ScrollView>
    );
  }
};

const ConsultationScreen = ({ navigation }) => (
  <Consultation navigation={navigation} />
);


const Consultations = createStackNavigator({
  consultationsList: {
    screen: ConsultationsList,
    path: '/',
    navigationOptions: {
      title: 'Consultations'
    }
  },
  consultation: {
    screen: Consultation,
    path: '/consultation/:timestamp',
    navigationOptions: ({ navigation }) => ({
      title: `Consultation on ${navigation.state.params.timestamp}`,
    })
  }
});

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  consul: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 90,
    borderWidth: 1,
    borderColor: theme.colors.border.base
  },
  dateSection: {
    flex: 1
  },
  date: {
    alignItems: 'center',
    width: 50,
    height: 60,
    backgroundColor: theme.colors.border.base,
  },
  bold: {
    fontWeight: 'bold'
  }
}));

export default Consultations;
