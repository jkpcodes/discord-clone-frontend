import { Button, Box } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


const InvitationsButton = ({ acceptInvitation, rejectInvitation, disabled }) => {
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: "4px"}}>
      <Button
        sx={{width: "24px", height: "24px", minWidth: "24px", padding: 0}}
        disabled={disabled}
        onClick={acceptInvitation}
      >
        <CheckIcon style={{color: "#58b957", fontSize: "16px"}} />
      </Button>
      <Button
        sx={{width: "24px", height: "24px", minWidth: "24px", padding: 0}}
        disabled={disabled}
        onClick={rejectInvitation}
      >
        <ClearIcon style={{color: "#d93025", fontSize: "16px"}} />
      </Button>
    </Box>
  );
}
 
export default InvitationsButton;