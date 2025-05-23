import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { setAlert } from '../../store/alertSlice';
import { setUserDetails } from '../../store/authSlice';

const AuthGuard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }

    // Add event listener for unauthorized to logout the user
    // NOTE: This event is triggered from Axios api responseinterceptor
    const handleUnauthorized = () => {
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
    return () => window.removeEventListener('unauthorized', handleUnauthorized);
  }, [navigate, dispatch]);

  return null; // This component doesn't render anything
};

export default AuthGuard; 