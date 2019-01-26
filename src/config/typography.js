import Typography from 'typography'
import colors from './colors'
import baseTheme from 'typography-theme-funston'

const typography = new Typography({
  ...baseTheme,
  bodyColor: colors.bodyText,
  headerColor: colors.headerText,
  overrideThemeStyles: (_, options, styles) => ({
    body: {
      backgroundColor: colors.background
    },
    'blockquote,pre': {
      backgroundColor: colors.backgroundAlt
    },
    'a:hover': {
      color: colors.brand
    }
  })
})

export default typography
