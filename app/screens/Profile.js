import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

  renderIcon(name) {
    return (
      <View style={styles.iconContainer} >
        <MaterialCommunityIcons name={name} size={20} style={styles.icon}/>
      </View>
    );
  }

  renderPreExistingConditionItem({ item }) {
    return <RkText rkType='header'>{item}</RkText>
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.header}>
          <Avatar img={this.state.data.photo} rkType='big' />
          <RkText rkType='xxlarge'>{`${this.state.data.first_name} ${this.state.data.last_name}`}</RkText>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.iconSection} >
            { this.renderIcon('gender-male-female')}
          </View>
          <View style={[styles.section, styles.bordered]}>
            <RkText rkType='subtitle hintColor' style={styles.space}>Gender</RkText>
            <RkText rkType='header'>{this.state.data.sex}</RkText>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.iconSection} >
            { this.renderIcon('calendar')}
          </View>
          <View style={[styles.section, styles.bordered]}>
            <RkText rkType='subtitle hintColor' style={styles.space}>Date Of Birth</RkText>
            <RkText rkType='header'>{this.state.data.date_of_birth}</RkText>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.iconSection} >
            { this.renderIcon('home-map-marker')}
          </View>
          <View style={[styles.section, styles.bordered]}>
            <RkText rkType='subtitle hintColor' style={styles.space}>Address</RkText>
            <RkText rkType='header'>{this.state.data.address}</RkText>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.iconSection} >
            { this.renderIcon('format-list-bulleted')}
          </View>
          <View style={styles.section}>
            <RkText rkType='subtitle hintColor' style={styles.space}>Pre Existing Conditions</RkText>
            <FlatList
              data={this.state.data.pre_existing_conditions}
              renderItem={this.renderPreExistingConditionItem}
              keyExtractor={(item, index) => index.toString()}
            />
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
    paddingHorizontal: 18
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  iconSection: {
    flex: 1
  },
  iconContainer: {
    marginTop: 20,
    height: 30,
    width: 30,
    borderRadius: 20,
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#ffffff'
  },
  section: {
    flex: 5,
    paddingVertical: 18
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
