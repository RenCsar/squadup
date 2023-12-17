import { createTheme } from '@mui/material/styles';

interface CustomTheme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }

const theme: CustomTheme = createTheme({
  palette: {
    primary: {
      main: 'var(--azul-claro)', // Azul
    },
    secondary: {
      main: '#FF4081', // Rosa
    },
    error: {
      main: '#FF5722', // Laranja
    },
    warning: {
      main: '#FFC107', // Amarelo
    },
    info: {
      main: '#4CAF50', // Verde
    },
    success: {
      main: '#FF9800', // Vermelho
    },
    background: {
      default: '#f5f5f5', // Cor de fundo padrão
    },
    text: {
      primary: '#333', // Cor do texto principal
      secondary: '#757575', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: 8, // Espaçamento base entre componentes
  shape: {
    borderRadius: 4, // Borda arredondada padrão
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;