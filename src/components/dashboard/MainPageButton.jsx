import { Button } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

const MainPageButton = () => {
  return (
    <Button
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: "0",
        padding: "0",
        minWidth: "0",
        marginTop: "4px",
        marginBottom: "4px",
        paddingTop: "8px",
        paddingBottom: "8px",
        color: "#fff",
        backgroundColor: "#5865f2",
      }}
    >
      <GroupsIcon />
    </Button>
  );
}
 
export default MainPageButton;