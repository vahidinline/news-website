import './App.css';
import Login from './pages/Login';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainView from './pages/MainView';
import ProfileView from './pages/ProfileView';
import StoryView from './pages/StoryView';
import React from 'react';
import { useSelector } from 'react-redux';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { IconButton } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  //const [darkMode, setDarkMode] = React.useState(false);
  const { user } = useSelector((state) => state.token);
  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? 'dark' : 'light',
  //   },
  // });
  const ProtectedRoute = ({ userLoggedin, redirectPath = '/' }) => {
    if (user.value === '' || user.value === null) {
      return <Navigate to={redirectPath} replace />;
    } else {
      return <Outlet />;
    }
  };
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      {/* <IconButton id="darkMode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/main" element={<MainView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/story/:id" element={<StoryView />} />
        </Route>
      </Routes>
    </div>
    // </ThemeProvider>
  );
}

export default App;
