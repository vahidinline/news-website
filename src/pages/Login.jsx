import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userAPI';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [apiToken, setApiToken] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email: email, value: apiToken, userLoggedin: true }));
    navigate('main');

    // console.log(email, apiToken);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="api"
            label="API Token"
            type="text"
            onChange={(e) => setApiToken(e.target.value)}
            id="text"
          />
          <FormControlLabel
            control={
              <Typography component="body" variant="body">
                get your own API token at
                <Link href="https://newsapi.org/account"> here</Link>
              </Typography>
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
