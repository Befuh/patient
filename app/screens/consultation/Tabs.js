import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import { createNavigator, createNavigationContainer, SafeAreaView, TabRouter } from 'react-navigation';
import Symptoms from './Symptoms';
import Analysis from './Analysis';
import Treatments from './Treatments';
import { KittenTheme } from '../../config/theme';
import i18n from '../../i18n';

const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state;

  const isActive = routeName => (routes[navigation.state.index].routeName == routeName);

  const tabStyles = routeName => {
    stylesArray = [styles.tab, styles[routeName]];

    if (isActive(routeName)) return stylesArray.concat(styles.active);

    return stylesArray.concat(styles.inactive);
  };

  const textStyles = routeName => (isActive(routeName) ?  styles.activeText : {});

  return (
    <SafeAreaView style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={tabStyles(route.routeName)}
          key={route.routeName}
        >
          <RkText style={textStyles(route.routeName)}>{i18n.t(`consultation.${route.routeName}`)}</RkText>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const TabView = ({ descriptors, navigation }) => {
  const { routes, index } = navigation.state;
  const descriptor = descriptors[routes[index].key];
  const ActiveScreen = descriptor.getComponent();
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <CustomTabBar navigation={navigation} />
      <ActiveScreen navigation={descriptor.navigation} />
    </SafeAreaView>
  );
};

const ConusltationTabRouter = TabRouter(
  {
    symptoms: {
      screen: Symptoms,
      path: '',
    },
    analysis: {
      screen: Analysis,
      path: 'analysis',
    },
    treatments: {
      screen: Treatments,
      path: 'treatments',
    },
  },
  {
    initialRouteName: 'symptoms'
  }
);

const ConsultationTabs = createNavigationContainer(createNavigator(TabView, ConusltationTabRouter, {}));

const styles = RkStyleSheet.create(theme => ({
  tabContainer: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 15
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  inactive: {
    borderColor: theme.colors.border.base,
    backgroundColor: theme.colors.screen.base
  },
  active: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary
  },
  activeText: {
    color: theme.colors.screen.base
  },
  symptoms: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  treatments: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
}));

export default ConsultationTabs;
