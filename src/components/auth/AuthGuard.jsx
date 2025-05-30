import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { setAlert } from '../../store/alertSlice';
import { setUserDetails } from '../../store/authSlice';
import { connectWithSocketServer, disconnectSocket, getSocket } from '../../services/socketService';

const AuthGuard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      let userDetailsObject = JSON.parse(userDetails);
      dispatch(setUserDetails(userDetailsObject));
      navigate("/dashboard");
      
      // Only connect if not already connected
      if (!getSocket()?.connected) {
        connectWithSocketServer(userDetailsObject);
      }
    }

    // Add event listener for unauthorized to logout the user
    // NOTE: This event is triggered from Axios api responseinterceptor
    const handleUnauthorized = () => {
      disconnectSocket(); // Disconnect socket on logout
      dispatch(logout());
      dispatch(setAlert({
        open: true,
        message: 'Your session has expired. Please login again.',
        severity: 'warning',
        vertical: 'top',
        horizontal: 'center',
      }));
      navigate('/login', { replace: true });
    };

    window.addEventListener('unauthorized', handleUnauthorized);
    
    // Cleanup function
    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
      // Note: We don't disconnect the socket here as it should persist across route changes
    };
  }, [navigate, dispatch]);

  return null;
};

export default AuthGuard; 