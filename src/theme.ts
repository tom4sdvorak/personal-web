import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: '#B0FFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#000000',
      paper: '#1d1d1d',
    },
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: `body {
          margin: 0;
          display: flex;
          min-width: 320px;
          min-height: 100vh;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 200vh;
          background: linear-gradient(180deg, rgba(0, 55, 51, 1) 0%, rgba(0, 0, 0, 1) 100%);
          background-size: 100% 200vh;
          background-repeat: no-repeat;
          transform: translateY(var(--bg-pos-y, 0%));
          transition: transform 1.04s cubic-bezier(0.2, 0.8, 0.5, 1);
          z-index: -1;
        }`
    },
    MuiPaper: {
      styleOverrides: {
        root: () => ({
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.05) 100%)`,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.7), 0px -5px 10px rgba(0, 0, 0, 0.1)',
        }),
      },        
    },
    MuiButton: {
        styleOverrides: {
            contained: { 
            backgroundColor: '#B0FFFF', 
            color: '#000000',
            '&:hover': {
              backgroundColor: '#80FFFF',
              backgroundImage: 'none',
            },
            },
        },
    },
  }
});

export default darkTheme;