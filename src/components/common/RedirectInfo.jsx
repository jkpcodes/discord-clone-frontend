import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RedirectText = styled("span")(({ theme }) => ({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
}));

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}> {redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
