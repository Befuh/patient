import { RkTheme } from 'react-native-ui-kitten';
import { AvatarTypes } from '../components/avatar/types';

export const bootstrap = () => {
  RkTheme.registerComponent('Avatar', AvatarTypes);
};
