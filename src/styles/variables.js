import { blackAlpha } from './utils';

const colors = {
  white: '#FFF',

  // error
  error: '#ff6c56',

  // Blue
  blue: {
    primary: '#2c86ff',
    secondary: '#559eff',
    navy: '#0c1d33',
    shadeOne: '#6faaff',
  },

  // Black
  black: {
    default: '#000',
    main: '#121212',
    primary: blackAlpha(0.5),
    secondary: blackAlpha(0.4),
  },
};

const padding = {
  input: '2.5rem 1.2rem 0.7rem',
  // input: '4.7rem 1.6rem 2rem',
  container: '0.8rem 1.2rem',
  v: '0.8rem',
  h: '1.2rem',
};

const fs = { // font size
  xs: '1.2rem',
  sm: '1.4rem',
  lg: '2.6rem',
};

const font = {
  normal: 100,
  bold: 700,
};

const radius = {
  default: '0.5rem',
};

export {
  colors,
  padding,
  fs,
  font,
  radius,
};