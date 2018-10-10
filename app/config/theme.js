import scale from '../utils/scale';

const Colors = {
  primary: '#2fb5ae'
};

const Fonts = {
  bold: 'bold'
};

export const KittenTheme = {
  colors: {
    primary: Colors.primary
  },
  fonts: {
    sizes: {
      h0: scale(32),
      h1: scale(26),
      h2: scale(24),
      h3: scale(20),
      h4: scale(18),
      h5: scale(16),
      h6: scale(15)
    },
    family: {
      regular: Fonts.regular,
      light: Fonts.light,
      bold: Fonts.bold
    }
  }
};
