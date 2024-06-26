import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import StyledButton from '../../ui/StyledButton';

const PasswordSuccess = ({ setCurrentPaper }) => {

  return (
    <Paper
      sx={{
        width: { xs: '100%', sm: '80%', md: '544px' },
        height: { xs: 'auto', md: '223px' },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '30px',
        borderRadius: '8.75px',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '85%',
          marginTop: '10px',
          marginBottom: '3em',
        }}
      >
        <Stack spacing={2} sx={{ width: '100%', textAlign: 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>
            Password Reset Successful
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#05A660' }}>
            Your password has been successfully reset.
          </Typography>
          <StyledButton
            variant="primary"
            name="Try logging in again"
            onClick={() => setCurrentPaper(1)}
          />
        </Stack>
      </Box>
    </Paper>
  );
};

export default PasswordSuccess;
