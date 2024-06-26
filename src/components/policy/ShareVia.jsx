import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import email from '../../assets/images/Email.png'
import message from '../../assets/images/message.png'
import whatsapp from '../../assets/images/whatsapp.png'
import copy from '../../assets/images/copy.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
const ShareVia = ({ open, onClose }) => {
  const handleClear = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
          >
            <Box flexGrow={1} />
            <h2 style={{ flexGrow: 1 }}>Share Via</h2>
            <Box position="absolute" right={0} onClick={handleClear}>
              <CrossIcon />
            </Box>
          </Box>
          <Grid container spacing={2}>
            
            <Grid item md={4}><Stack spacing={2}>
                <img src={message} width={"72px"} height={"51px"} style={{backgroundColor:"rgba(148, 240, 255, 1)"}}/>
                <Typography variant="h9">Message</Typography>
                </Stack></Grid>
                <Grid item md={4}><Stack spacing={2}>
                <img src={email} width={"69px"} height={"52px"}/>
                <Typography variant="h9">Gmail</Typography>
                </Stack></Grid>
                <Grid item md={4}><Stack spacing={2}>
                <img src={whatsapp} width={"64px"} height={"65px"}/>
                <Typography variant="h9">Whatsapp</Typography>
                </Stack></Grid>
                <Grid item md={4}><Stack spacing={2}>
                <img src={instagram} width={"72px"} height={"70px"}/>
                <Typography variant="h9">Instagram</Typography>
                </Stack></Grid>
                <Grid item md={4}><Stack spacing={2}>
                <img src={facebook} width={"69px"} height={"69px"}/>
                <Typography variant="h9">Facebook</Typography>
                </Stack></Grid>
                <Grid item md={4}><Stack spacing={2}>
                <img src={copy} width={"44px"} height={"55px"}/>
                <Typography variant="h9">Copy</Typography>
                </Stack></Grid>
          </Grid>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ShareVia;
