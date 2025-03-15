import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const SupportPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleFileChange = (event) => {
    setScreenshot(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (screenshot) {
      formData.append("screenshot", screenshot);
    }

    console.log("Form Submitted", { title, description, screenshot });
  };

  return (
    <Box p={4} bgcolor="white" width="100%" maxWidth="100%" borderRadius={2}>
      <Typography variant="h4" gutterBottom>
        Submit a Issue
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginTop: "16px", marginBottom: "16px" }}
        />
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            type="submit"
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: "#002B9B",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px 30px",
              color: "#fff",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportPage;
