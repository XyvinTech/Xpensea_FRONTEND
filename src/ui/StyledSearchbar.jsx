import React from 'react'
import { Box, TextField, InputAdornment } from '@mui/material'
import { SearchIcon } from '../assets/icons/SearchIcon'

const StyledSearchbar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search Event"
        sx={{
          width: '320px',
          bgcolor:"white",
          height: '48px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '24px',
            height: '48px',
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.01), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)', 
            '& input': {
              height: '48px',
              padding: '0 14px',
            },
            '& fieldset': {
              border: 'none', 
              borderRadius: '24px',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default StyledSearchbar