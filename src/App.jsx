import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AlertNotification from "./components/common/AlertNotification";
import AuthGuard from "./components/auth/AuthGuard";
import { setUserDetails } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AppContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
}));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open, message, severity, vertical, horizontal } = useSelector(
    (state) => state.alert
  );
  const userDetails = localStorage.getItem("userDetails");

  useEffect(() => {
    if (userDetails) {
      let userDetailsObject = JSON.parse(userDetails);
      dispatch(setUserDetails(userDetailsObject));
      navigate("/dashboard");
    }
  }, [navigate, dispatch, userDetails]);

  return (
    <>
      <AuthGuard />
      <AppContainer>
        <Outlet />
      </AppContainer>
      <AlertNotification
        open={open}
        message={message}
        severity={severity}
        vertical={vertical}
        horizontal={horizontal}
      />
    </>
  );
}

export default App;
