import { Radio } from '@mui/material';
import React from 'react';

const StyledRadioButton = (props) => {
  return (
    <Radio
      {...props}
      sx={{
        color: '#000000',
        '&.Mui-checked': {
          color: '#000000',
        },
      }}
    />
  );
};


export default StyledRadioButton;

