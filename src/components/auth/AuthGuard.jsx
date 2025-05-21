import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { setAlert } from '../../store/alertSlice';

const AuthGuard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
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