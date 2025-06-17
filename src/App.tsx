import {  ThemeProvider, createTheme } from '@mui/material';
import NewsList from './componenets/NewsList';
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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsList />
    </ThemeProvider>
  );
}

export default App;