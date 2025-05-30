import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { validateEmail } from "../../utils/validators";
import InputField from "../common/InputField";
import { useState, useEffect } from "react";
import PrimaryButton from "../common/PrimaryButton";
import { useDispatch } from "react-redux";
import { setAlert } from "../../store/alertSlice";
import { sendFriendInvitation } from "../../services/friends";
import { useMutation } from "@tanstack/react-query";

const AddFriendDialog = ({ isDialogOpen, handleCloseDialog }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const sendInvitationMutation = useMutation({
    mutationFn: (email) => sendFriendInvitation(email),
    onSuccess: () => {
      handleClose();
      dispatch(
        setAlert({
          open: true,
          message: "Friend invitation sent",
          severity: "success",
        })
      );
    },
    onError: (error) => {
      dispatch(
        setAlert({
          open: true,
          message: error.message,
          severity: "error",
          vertical: "top",
          horizontal: "center",
        })
      );
    },
  });

  const handleSendInvitation = () => {
    // Send friend request to server
    sendInvitationMutation.mutate({ email });
  };

  const handleClose = () => {
    handleCloseDialog();
    setEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <Dialog open={isDialogOpen} onClose={handleClose}>
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter email address of the person you want to invite
        </DialogContentText>
        <InputField
          label="Email"
          type="text"
          value={email}
          setValue={setEmail}
          placeholder="Enter email address"
        />
      </DialogContent>
      <DialogActions>
        <PrimaryButton
          onClick={handleClose}
          label="Close"
          additionalStyles={{
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "10px",
            backgroundColor: "#000",
          }}
        />
        <PrimaryButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label="Send"
          additionalStyles={{
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddFriendDialog;
