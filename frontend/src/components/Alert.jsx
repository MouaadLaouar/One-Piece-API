import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Alerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {/* <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
      <Alert severity="info">Character images are not available at the moment, thank you!</Alert>
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </Stack>
  );
}
