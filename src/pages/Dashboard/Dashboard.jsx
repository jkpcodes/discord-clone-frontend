import { styled } from "@mui/material/styles";
import ServerSidebar from "../../components/dashboard/ServerSidebar";
import FriendsSidebar from "../../components/dashboard/FriendsSidebar";
import MessagePanel from "../../components/dashboard/MessagePanel";
import Appbar from "../../components/dashboard/AppBar";

const DashboardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  height: "calc(100% - 48px)",
  width: "100%",
  display: "flex",
  flexGrow: 1,
  backgroundColor: "blue",
}));

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Appbar />
      <ContentContainer>
        <ServerSidebar />
        <FriendsSidebar />
        <MessagePanel />
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
