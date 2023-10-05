import React from 'react';
import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OnlineIndicator = () => {
  return (
    <div>
      <Box
        sx={{
          color: '#3ba55d',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          right: '5px',
        }}
      >
        <FiberManualRecordIcon />
      </Box>
    </div>
  );
};

export default OnlineIndicator;
