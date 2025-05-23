import { Avatar } from "@mui/material";

function stringToColor(username) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < username.length; i += 1) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(username) {
  return {
    sx: {
      bgcolor: stringToColor(username),
    },
    children: `${username.split(" ")[0][0]}${username.split(" ")[1][0]}`,
  };
}

const UserAvatar = ({ username }) => {
  return <Avatar {...stringAvatar(username)} />;
};

export default UserAvatar;
