import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    mainDarkBlue: '#405b67',
    mainLightBlue: '#86a6c5',
  },

  components: {
    Box: {
      variants: {
        container: {
          _dark: {
            bg: 'dark.50',
          },
          _light: {
            bg: 'gray.300',
          },
        },
        superHeroContainer: {
          _dark: {
            bg: 'dark.100',
          },
          _light: {
            bg: 'gray.200',
          },
          padding: 1,
          rounded: '2xl',
        },
      },
    },
    Input: {
      variants: {
        searchBar: {
          _dark: {
            bg: 'dark.100',
          },
          _light: {
            bg: 'gray.200',
          },
          height: 10,
        },
      },
    },
  },
});

export default theme;
type Theme = typeof theme;
declare module 'native-base' {
  interface ICostumTheme extends Theme {}
}
