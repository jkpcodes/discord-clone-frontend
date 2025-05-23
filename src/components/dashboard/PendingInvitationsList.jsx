import { styled } from "@mui/material/styles";
import PendingInvitationItem from "./PendingInvitationItem";

const DUMMY_INVITATIONS = [
  {
    id: 1,
    senderId: {
      username: "John Doe",
      email: "john.doe@example.com",
    },
  },
  {
    id: 2,
    senderId: {
      username: "Jane Doe",
      email: "jane.doe@example.com",
    },
  },
];

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
}));

const PendingInvitationsList = () => {
  return (
    <Container>
      {DUMMY_INVITATIONS.map((invitation) => (
        <PendingInvitationItem
          key={invitation.id}
          invitation={invitation}
        />
      ))}
    </Container>
  );
}
 
export default PendingInvitationsList;