import { styled } from "@mui/material/styles";
import MainPageButton from "./MainPageButton";

const Container = styled("div")(({ theme }) => ({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#0f0f11",
  borderRight: `1px solid #1a1a1e`,
}));

const ServerSidebar = () => {
  return (
    <Container>
      <MainPageButton />
    </Container>
  );
}

export default ServerSidebar;
