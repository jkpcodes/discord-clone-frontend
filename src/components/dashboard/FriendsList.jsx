import { styled } from "@mui/material/styles";
import FriendListItem from "./FriendListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "John Doe",
    isOnline: true,
  },
  {
    id: 2,
    username: "Jane Doe",
    isOnline: false,
  },
  {
    id: 3,
    username: "John Smith",
    isOnline: true,
  },
];

const Container = styled("div")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
}));

const FriendsList = () => {
  return (
    <Container>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Container>
  );
}
 
export default FriendsList;