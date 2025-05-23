import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AccountMenu from "./AccountMenu";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "48px",
  top: 0,
  left: 0,
  right: 0,
  alignItems: "center",
  backgroundColor: "#0f0f11",
  display: "flex",
  flexDirection: "row-reverse",
}));

const Appbar = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);

  return (
    <Container>
      <AccountMenu />
    </Container>
  );
}
 
export default Appbar;