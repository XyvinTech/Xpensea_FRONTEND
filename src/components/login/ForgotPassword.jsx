import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { Controller, useForm } from 'react-hook-form';
import StyledInput from '../../ui/StyledInput';
import { EmailIcon } from '../../assets/icons/EmailIcon';
import StyledButton from '../../ui/StyledButton';
import { getLogin } from '../../api/adminapi';

const ForgotPassword = ({ setCurrentPaper }) => {

  const handleGoBack = () => {
    setCurrentPaper(1);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await getLogin(data);
      // console.log(user);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Paper
      sx={{
        width: { xs: '100%', sm: '80%', md: '544px' },
        height: { xs: 'auto', md: '325px' },
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
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              Forgot Your Password
            </Typography>
            <Box onClick={handleGoBack} sx={{ cursor: 'pointer' }}>
              <CloseIcon />
            </Box>
          </Stack>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We will send you a reset link
          </Typography>
          <Controller
            name="forgotEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput
                {...field}
                placeholder="Enter your email"
                startIcon={<EmailIcon />}
              />
            )}
            rules={{ required: 'Email is required' }}
          />
          {errors.forgotEmail && (
            <span className="text-red-500">{errors.forgotEmail.message}</span>
          )}
          <StyledButton type="submit" variant="primary" name="Send" />
        </Stack>
      </Box>
    </Paper>
  );
};

export default ForgotPassword;
