import React from 'react';
import { View, ScrollView } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from '../components/avatar';
import { data } from '../data';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Ionicons
        name='ios-person'
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    )
  };

  state = { data: data.getUser() };

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.header}>
          <RkText rkType='xxlarge'>{`${this.state.data.first_name} ${this.state.data.last_name}`}</RkText>
        </View>

        <View style={[styles.heading, styles.bordered]}>
          <RkText rkType='large'>General Information</RkText>
        </View>
        <View style={styles.userInfo}>
          <RkText rkType='header' style={styles.space}>Sex</RkText>
          <RkText rkType='subtitle hintColor'>{this.state.data.sex}</RkText>
        </View>
        <View style={styles.userInfo}>
          <RkText rkType='header' style={styles.space}>Date Of Birth</RkText>
          <RkText rkType='subtitle hintColor'>{this.state.data.date_of_birth}</RkText>
        </View>
        <View style={[styles.heading, styles.bordered]}>
          <RkText rkType='large'>Pre Existing Conditions</RkText>
        </View>
        <View style={styles.userInfo}>
          <RkText rkType='medium' style={styles.space}>- Diabetes</RkText>
        </View>
      </ScrollView>
    );
  }
}

export default Profile;

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 30,
  },
  heading: {
    backgroundColor: '#f2f2f2',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    marginVertical: 15
  },
  userInfo: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  bordered: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  space: {
    marginBottom: 3,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
}));
