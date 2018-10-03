import React from 'react';
import { View, ScrollView } from 'react-native';
import { RkStyleSheet, RkText, RkButton } from 'react-native-ui-kitten';
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
        <View style={[styles.header, styles.bordered]}>
          <Avatar img={this.state.data.photo} rkType='big' />
          <RkText rkType='header2'>{`${this.state.data.first_name} ${this.state.data.last_name}`}</RkText>
          <RkButton style={styles.button}><RkText>A Button</RkText></RkButton>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.section}>
            <RkText rkType='header3' style={styles.space}>{this.state.data.sex}</RkText>
            <RkText rkType='secondary1 hintColor'>Sex</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType='header3' style={styles.space}>{this.state.data.date_of_birth}</RkText>
            <RkText rkType='secondary1 hintColor'>Date Of Birth</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType='header3' style={styles.space}>{5}</RkText>
            <RkText rkType='secondary1 hintColor'>Following</RkText>
          </View>
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
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  section: {
    flex: 1,
    alignItems: 'center',
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
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    marginTop: 18,
    alignSelf: 'center',
    width: 140,
  },

}));
