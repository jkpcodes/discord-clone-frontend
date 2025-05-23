import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundColor: "#161618",
  justifyContent: "center",
  alignItems: "center",
}));

const PageBox = ({ children }) => {
  return (
    <PageContainer>
      <Box>{children}</Box>
    </PageContainer>
  );
};

export default PageBox;
