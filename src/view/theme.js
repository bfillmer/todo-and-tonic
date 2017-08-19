
// https://coolors.co/040f0f-364156-0dab76-c1292e-69ebd0
const richBlack = `rgba(4, 15, 15, 1)`
const charcoal = `rgba(54, 65, 86, 1)`
const greenMunsell = `rgba(13, 171, 118, 1)`
const internationalOrange = `rgba(193, 41, 46, 1)`
// const aquamarine = `rgba(105, 235, 208, 1)`

export const theme = {
  colors: {
    primary: charcoal,
    secondary: greenMunsell,
    black: richBlack,
    warning: internationalOrange
  },
  bottomMargin: '1.5rem'
}

// Simple helper function, takes in any number of props mapping to properties within the theme
// object and returns the value.
export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme)
