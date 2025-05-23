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

const AddFriendDialog = ({
  isDialogOpen,
  handleCloseDialog,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    // Send friend request to server

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
          <Typography>
            Enter email address of the person you want to invite
          </Typography>
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
            backgroundColor: "#000"
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
