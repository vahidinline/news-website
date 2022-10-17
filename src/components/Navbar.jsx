import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {} from 'react-redux';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { name } = useSelector((state) => state.token.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News for {name}
          </Typography>
          <Button color="inherit">
            <Link
              style={{ textDecoration: 'none', color: '#fff' }}
              to="profile">
              Profile
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ textDecoration: 'none', color: '#fff' }} to="main">
              Main
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
