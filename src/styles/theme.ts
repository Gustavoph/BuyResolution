import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    html: {
      boxSizing: 'border-box',
    },
    body: {
      background: '#121214',
    },
  },
}

const colors = {
  green: {
    300: '#00B37E',
    500: '#00875F',
    700: '#015F43',
  },
  blue: {
    500: '#81D8F7',
  },
  orange: {
    500: '#FBA94C',
  },
  red: {
    500: '#F75A68',
  },
  gray: {
    100: '#E1E1E6',
    200: '#C4C4CC',
    300: '#8D8D99',
    500: '#323238',
    600: '#29292E',
    700: '#202024',
    800: '#121214',
    900: '#09090A',
  },
  icon: '#505059',
  background: '#121214',
  text: {
    base: '#C4C4CC',
    title: '#E1E1E6',
    support: '#8D8D99',
    placeholder: '#7C7C8A',
  },
}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
}

export const defaultTheme = extendTheme({ colors, fonts, styles, breakpoints })
