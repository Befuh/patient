import { RkTheme } from 'react-native-ui-kitten';
import { AvatarTypes } from '../components/avatar/types';
import { KittenTheme } from './theme';

export const bootstrap = () => {
  RkTheme.setTheme(KittenTheme, null);

  // theme text styles
  RkTheme.setType('RkText', 'header1', {
    fontSize: theme => theme.fonts.sizes.h1,
    fontWeight: theme => theme.fonts.family.bold,
  });

  RkTheme.setType('RkText', 'header2', {
    fontSize: theme => theme.fonts.sizes.h2,
    fontWeight: theme => theme.fonts.family.bold,
  });

  RkTheme.setType('RkText', 'header3', {
    fontSize: theme => theme.fonts.sizes.h3,
    fontWeight: theme => theme.fonts.family.bold,
  });

  RkTheme.registerComponent('Avatar', AvatarTypes);
};
