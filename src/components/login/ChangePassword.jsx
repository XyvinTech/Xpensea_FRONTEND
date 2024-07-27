import React, { useState } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import StyledInput from '../../ui/StyledInput';
import { LockIcon } from '../../assets/icons/LockIcon';
import { PasswordIcon } from '../../assets/icons/PasswordIcon';
import StyledButton from '../../ui/StyledButton';
import { getLogin } from '../../api/adminapi';

const ChangePassword = ({ setCurrentPaper }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await getLogin(data);
      
      setCurrentPaper(4); // Move to password success page
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Paper
      sx={{
        width: { xs: '100%', sm: '80%', md: '544px' },
        height: { xs: 'auto', md: '415px' },
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
          <Typography variant="h2" sx={{ marginBottom: '10px' }}>
            Changing Password
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Enter your new password
          </Typography>
          <Controller
            name="newPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput
                {...field}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your new password"
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
            )}
            rules={{ required: 'New password is required' }}
          />
          {errors.newPassword && (
            <span className="text-red-500">{errors.newPassword.message}</span>
          )}
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput
                {...field}
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
            )}
            rules={{ required: 'Confirm password is required' }}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}
          <StyledButton type="submit" variant="primary" name="Confirm" />
        </Stack>
      </Box>
    </Paper>
  );
};

export default ChangePassword;
