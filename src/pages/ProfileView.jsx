import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userAPI';

const ProfileView = () => {
  const { email } = useSelector((state) => state.token.user.email);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //const [email, setEmail] = React.useState('');
  const [apiToken, setApiToken] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/main`);

    // console.log(email, apiToken);
    dispatch(login({ email: email, value: apiToken }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid>
        <Typography>{email}</Typography>
      </Grid>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          //onChange={(e) => setEmail(e.target.value)}
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default ProfileView;
