import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearAlert } from "../../store/alertSlice";

const AlertNotification = ({
  open,
  message,
  severity,
  vertical,
  horizontal,
}) => {
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearAlert());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
