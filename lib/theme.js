import base from '@hackclub/theme'

const theme = base

theme.styles['p > code, li > code'] = {
  color: 'purple',
  fontSize: '0.875em'
}
theme.styles['p > a > code, li > a > code'] = {
  color: 'red',
  fontSize: '0.875em'
}

theme.cards.nav = {
  bg: 'elevated',
  color: 'text',
  p: 3,
  borderRadius: 'extra',
  boxShadow: 'card',
  textDecoration: 'none',
  position: 'relative',
  overflow: 'hidden',
  fontSize: 2,
  fontWeight: 'bold',
  lineHeight: 'title',
  WebkitTapHighlightColor: 'transparent',
  transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
  ':hover,:focus': {
    transform: 'scale(1.0625)',
    boxShadow: 'elevated'
  }
}

export default theme
