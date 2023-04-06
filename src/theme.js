import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
  custom: {
    sectionSpacing: (multiplier = 1) => ({
      marginTop: theme.spacing(4 * multiplier),
      marginBottom: theme.spacing(4 * multiplier),
    }),
  },
});


export default theme;
