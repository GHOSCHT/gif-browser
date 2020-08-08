import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#23272A',
    },
    secondary: {
      main: '#7289DA',
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: darkTheme.palette.secondary.main,
    },
    secondary: {
      main: darkTheme.palette.secondary.main,
    },
  },
});

function Home() {
  const isDarkMode = useSelector((state) => state.darkModeReducer);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavBar />
      <SearchBar />
      <CssBaseline />
      <ImageList />
    </ThemeProvider>
  );
}

export default Home;
