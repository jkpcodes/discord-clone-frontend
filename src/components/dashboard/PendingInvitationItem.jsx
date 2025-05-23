import { Tooltip, Box, Typography } from "@mui/material";
import { useState } from "react";
import UserAvatar from "./UserAvatar";
import InvitationsButton from "./InvitationsButton";

const PendingInvitationItem = ({ invitation, acceptInvitation, rejectInvitation }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    setButtonDisabled(true);
    acceptInvitation();
  };

  const handleRejectInvitation = () => {
    setButtonDisabled(true);
    rejectInvitation();
  };

  return (
    <Tooltip title={invitation.senderId.email} sx={{width: "100%"}}>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <Box
          display="flex"
          alignItems="center"
        >
          <UserAvatar username={invitation.senderId.username} />
          <Typography
            style={{
              marginLeft: "10px",
              fontWeight: 600,
              color: "#8e9297",
            }}
          >
            {invitation.senderId.username}
          </Typography>
        </Box>
        <InvitationsButton
          acceptInvitation={handleAcceptInvitation}
          rejectInvitation={handleRejectInvitation}
          disabled={buttonDisabled}
        />
      </div>
    </Tooltip>
  );
};

export default PendingInvitationItem;