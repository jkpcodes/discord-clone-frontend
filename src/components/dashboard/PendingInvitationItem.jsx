import { Tooltip, Box, Typography } from "@mui/material";
import UserAvatar from "./UserAvatar";
import InvitationsButton from "./InvitationsButton";
import { useDispatch } from "react-redux";
import { acceptInvitation, rejectInvitation } from "../../store/friendSlice";
import { useMutation } from "@tanstack/react-query";
import { acceptFriendInvitation , rejectFriendInvitation } from "../../services/friends";
import { setAlert } from "../../store/alertSlice";

const PendingInvitationItem = ({ invitation }) => {
  const dispatch = useDispatch();

  const acceptInvitationMutation = useMutation({
    mutationFn: acceptFriendInvitation,
    onSuccess: () => {
      dispatch(acceptInvitation(invitation.senderId._id));
      dispatch(setAlert({
        message: "Friend request accepted",
        type: "success",
      }));
    },
  });

  const handleAcceptInvitation = () => {
    acceptInvitationMutation.mutate({
      id: invitation._id,
    });
  };

  const rejectInvitationMutation = useMutation({
    mutationFn: rejectFriendInvitation,
    onSuccess: () => {
      dispatch(rejectInvitation(invitation.senderId._id));
      dispatch(setAlert({
        message: "Friend request deleted",
        type: "success",
      }));
    },
  });

  const handleRejectInvitation = () => {
    rejectInvitationMutation.mutate({
      id: invitation._id,
    });
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
          disabled={acceptInvitationMutation.isPending}
        />
      </div>
    </Tooltip>
  );
};

export default PendingInvitationItem;