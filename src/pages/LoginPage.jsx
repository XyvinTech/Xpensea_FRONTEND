import { Height } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { XpenseaIcon } from '../assets/icons/XpenseaIcon';
import StyledInput from '../ui/StyledInput';



const paperStyle = {width: '560px', height:'631.43px' };
const buttonStyle = { margin: '15px 0', backgroundColor: "#005A98", color: 'white' };


const LoginPage = () => {
  return (
    <div className='Login'>
<Grid>
<Paper elevation={2} sx={{height:'631.43px', textAlign:'center', display:'flex', justifyContent:'center', }}><XpenseaIcon/><Typography variant="h1" sx={{ ml: 1 }}>
                Xpensea
              </Typography>  <StyledInput/> <Divider/>
              </Paper>
           
</Grid>


      




    
    </div>
  )
}

export default LoginPage
