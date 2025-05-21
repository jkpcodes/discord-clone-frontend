import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: 700,
  height: 'auto',
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#36393F",
  borderRadius: "5px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  padding: 25,
}));

const AuthBox = ({ children, title }) => {
  return (
    <BoxWrapper>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      {children}
    </BoxWrapper>
  );
};

export default AuthBox;
