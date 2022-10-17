import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userAPI';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Button onClick={(e) => handleLogout(e)} fullWidth variant="contained">
      Logout
    </Button>
  );
};

export default Logout;
