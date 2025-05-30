import { styled } from "@mui/material/styles";
import FriendListItem from "./FriendListItem";
import { useSelector } from "react-redux";

const Container = styled("div")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
}));

const FriendsList = () => {
  const friends = useSelector((state) => state.friend.friends);
  const onlineFriends = useSelector((state) => state.friend.onlineFriends);

  return (
    <Container>
      {friends.map((friend) => (
        <FriendListItem
          key={friend._id}
          friend={friend}
          isOnline={onlineFriends.includes(friend._id)}
        />
      ))}
    </Container>
  );
}
 
export default FriendsList;