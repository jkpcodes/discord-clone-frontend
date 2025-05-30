import { Typography, Button } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import UserAvatar from "./UserAvatar";

const FriendListItem = ({ friend, isOnline }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "#000",
        position: "relative",
      }}
    >
      <UserAvatar username={friend.username} />
      <Typography
        style={{
          marginLeft: "10px",
          fontWeight: 600,
          color: "#8e9297",
        }}
      >
        {friend.username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
