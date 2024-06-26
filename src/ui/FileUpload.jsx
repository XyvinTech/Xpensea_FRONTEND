import React from 'react';
import styled from 'styled-components';
import img from "../assets/images/upload.png";
import { Typography } from '@mui/material';
const FileContainer = styled.div`
display: flex;
width: 100%;
padding: 25px 111px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: var(--borderRadius, 4px);
border: 1px dashed rgba(135, 137, 142, 1);
background: #F2F2F2;
`;


const FileUpload = () => {
 
  return (
    <FileContainer>
      <label htmlFor="fileInput">
        <div>
            <img src={img}/>
        </div>
        <input
          type="file"
          id="fileInput"
          accept=".pdf, .doc, .docx, .zip,.csv" 
          style={{ display: 'none' }}
        />
      </label>
        <Typography variant='h6'>
          Drop your file here to upload
          <br />
          or select from storage
        </Typography>
     
      
    </FileContainer>
   
  );
};

export default FileUpload;