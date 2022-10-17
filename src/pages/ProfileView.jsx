import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userAPI';

const ProfileView = () => {
  const { email } = useSelector((state) => state.token.user);
  const { value } = useSelector((state) => state.token.user);
  const { name } = useSelector((state) => state.token.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [apiToken, setApiToken] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/main`);

    // console.log(email, apiToken);
    dispatch(login({ name: userName, value: apiToken, email: userEmail }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid></Grid>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Email Address"
          name="name"
          autoFocus
          defaultValue={email}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          defaultValue={name}
          name="name"
          label="Name"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          id="text"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          defaultValue={value}
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
          Update{' '}
        </Button>
      </Box>
    </Container>
  );
};

export default ProfileView;
