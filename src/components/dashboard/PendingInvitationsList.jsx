import { styled } from "@mui/material/styles";
import PendingInvitationItem from "./PendingInvitationItem";
import { useSelector } from "react-redux";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
}));

const PendingInvitationsList = () => {
  const pendingInvitations = useSelector((state) => state.friend.pendingInvitations);

  return (
    <Container>
      {pendingInvitations.map((invitation) => (
        <PendingInvitationItem
          key={invitation.senderId._id}
          invitation={invitation}
        />
      ))}
    </Container>
  );
}
 
export default PendingInvitationsList;