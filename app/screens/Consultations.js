import React from 'react';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import data from '../data';
import { createStackNavigator } from 'react-navigation';
import ConsultationTabs from './consultation/Tabs';
import format from '../utils/format';
import NavigationType from '../config/navigation/propTypes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import timeago from 'timeago.js';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ConsultationsList extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };

  state = { data: data.getConsultations() };

  onItemPressed = ({ item }) => {
    this.props.navigation.navigate('ConsultationTabs', { timestamp: item.timestamp });
  }

  renderConsultation = ({ item }) => {
    const date = new Date(item.timestamp);
    const updatedSince = timeago().format(date);
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
        <View style={styles.textSection}>
          <RkText rkType='large' style={[styles.bold, styles.space]}>{`Consulted by ${item.doctor.name}`}</RkText>
          <RkText rkType='subtitle hintColor' style={styles.space}>{`at ${item.health_facility.name}`}</RkText>
          <RkText rkType='small'>{`Last updated ${updatedSince}`}</RkText>
        </View>
        <View style={styles.iconSection}>
          <MaterialCommunityIcons name={'arrow-right'} size={20}/>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderConsultation}
          keyExtractor={(consultation, index) => index.toString()}
        />
      </ScrollView>
    );
  }
};


const Consultations = createStackNavigator({
  consultationsList: {
    screen: ConsultationsList,
    path: '/',
    navigationOptions: {
      title: 'My Consultations'
    }
  },
  consultation: {
    screen: ConsultationTabs,
    path: '/consultation/:timestamp',
    navigationOptions: ({ navigation }) => {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(navigation.state.params.timestamp);

      return { title: date.toLocaleDateString('en-GB', options) };
    }
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
    height: 102,
    borderWidth: 1,
    borderColor: theme.colors.border.base
  },
  dateSection: {
    flex: 1
  },
  textSection: {
    paddingLeft: 10,
    flex: 5
  },
  iconSection: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1
  },
  date: {
    width: 45,
    height: 70,
    backgroundColor: theme.colors.border.base,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bold: {
    fontWeight: 'bold'
  },
  space: {
    marginBottom: 3,
  },
}));

export default Consultations;
