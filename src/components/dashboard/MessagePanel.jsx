import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexGrow: 1,
  backgroundColor: "#161618",
}));

const MessagePanel = () => {
  return (
    <Container>
    </Container>
  );
}
 
export default MessagePanel;