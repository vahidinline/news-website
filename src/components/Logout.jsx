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
    <>
      <Button
        size="small"
        onClick={(e) => handleLogout(e)}
        variant="text"
        color="inherit">
        Logout
      </Button>
    </>
  );
};

export default Logout;
