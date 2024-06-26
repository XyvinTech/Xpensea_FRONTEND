import React, { useState } from "react";
import { Box, Dialog, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import FileUpload from "../../ui/FileUpload";
import { CloseIcon } from "../../assets/icons/CloseIcon";

const UpoloadBulk = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}maxWidth="md" fullWidth >
         <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h4">Add Bulk</Typography>
          <Typography   color="#E71D36"style={{ cursor: "pointer" }}>
           <CloseIcon/>
          </Typography>
        </Box>
        <Divider />
      <Grid
        container
        spacing={2}padding={8}
        direction="row"
        // sx={{ pr: 2, pl: 2, fontSize: "14px" }}
      >
        <Grid
          item
          xs={12}
          textAlign="left"
          display="flex"
          justifyContent="flex-start"
          sx={{ mb: 2 }}
        >
          <FileUpload />
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => handleFileSelect(e.target.files, 0)}
          />
        </Grid>
        <Grid
          item
          xs={6}
          textAlign="right"
          display="flex"
          justifyContent="flex-end"
        ></Grid>
        <Grid
          item
          xs={6}
          textAlign="left"
          display="flex"
          justifyContent="flex-start"
        ></Grid>
        <Grid
          item
          xs={12}
          textAlign="left"
          display="flex"
          justifyContent="flex-start"
        ></Grid>
        <Grid
          item
          xs={12}
          textAlign="left"
          display="flex"
          justifyContent="flex-start"
        >
          <Typography variant='h5'align="left" color={'#333333'}>Instructions for bulk import:</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          textAlign="left"
          display="flex"
          justifyContent="flex-start"
        >
          <List
            sx={{
              listStyleType: "disc",
              listStylePosition: "inside",
              color:'#4F4F4F',
              fontSize:'12px'
            }}

          >
            <ListItem sx={{ display: "list-item" }}>
              RFID Field is mandatory.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              If any value is not present, then please use hyphen ("-") rather
              than leaving it blank.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Don't remove headers.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Maximum of 50 entries allowed at a time.
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default UpoloadBulk;
