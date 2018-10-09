import { RkTheme } from 'react-native-ui-kitten';
import { AvatarTypes } from '../components/avatar/types';
import { KittenTheme } from './theme';

export const bootstrap = () => {
  RkTheme.setTheme(KittenTheme, null);
  RkTheme.registerComponent('Avatar', AvatarTypes);
};
