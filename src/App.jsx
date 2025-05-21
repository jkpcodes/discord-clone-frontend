import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AlertNotification from "./components/common/AlertNotification";
import AuthGuard from "./components/auth/AuthGuard";

const AppContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
}));

function App() {
  const { open, message, severity, vertical, horizontal } = useSelector(
    (state) => state.alert
  );

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
