import { styled } from "@mui/material/styles";
import PrimaryButton from "../common/PrimaryButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList";
import PendingInvitationsList from "./PendingInvitationsLIst";
import AddFriendDialog from "./AddFriendDialog";
import { useState } from "react";

const Container = styled("div")(({ theme }) => ({
  width: "240px", 
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#0f0f11",
  borderRight: `1px solid #1a1a1e`,
}));

const FriendsSidebar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddFriend = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Container>
      <PrimaryButton
        label="Add Friend"
        additionalStyles={{
          width: "80%",
          height: "30px",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#3ba55d",
        }}
        onClick={handleAddFriend}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        handleCloseDialog={handleCloseDialog}
      />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
      {/* Pending Invitations */}
    </Container>
  );
}

export default FriendsSidebar;
