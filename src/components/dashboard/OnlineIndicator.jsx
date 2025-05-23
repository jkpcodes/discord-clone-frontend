import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box } from '@mui/material';

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "0",
        right: "5px",
        height: "100%",
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};

export default OnlineIndicator;

