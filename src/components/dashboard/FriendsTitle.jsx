import { Typography } from "@mui/material";

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "16px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
