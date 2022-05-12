import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LanguageSelector from './language-selector';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  

const LoginNavBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              alt=""
              src="/src/img/logo-white.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Meal Planner
          </Typography>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
      </ThemeProvider>
  );
}

export default LoginNavBar