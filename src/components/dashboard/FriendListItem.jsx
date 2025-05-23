import { Typography, Button } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import UserAvatar from "./UserAvatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const FriendListItem = ({ friend }) => {
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
      {friend.isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
