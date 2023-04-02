import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
const AutoGenerateImageModal = ({ onGenerate }) => {
  const [open, setOpen] = useState(false);
  const [imageSize, setImageSize] = useState("medium");
  const [colorScheme, setColorScheme] = useState("colorful");
  const [style, setStyle] = useState("abstract");
  const [blogPostTopic, setBlogPostTopic] = useState("");

  const imageSizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const colorSchemeOptions = [
    { value: "colorful", label: "Colorful" },
    { value: "monochrome", label: "Monochrome" },
    { value: "pastel", label: "Pastel" },
  ];

  const styleOptions = [
    { value: "abstract", label: "Abstract" },
    { value: "realistic", label: "Realistic" },
    { value: "minimalistic", label: "Minimalistic" },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenerate = () => {
    onGenerate({ blogPostTopic, imageSize, colorScheme, style });
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Auto Generate Image
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Auto Generate Blog Post Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide a prompt, blog post topic, and additional details for
            generating an image for your blog post.
          </DialogContentText>

          <TextField
            margin="dense"
            label="Blog Post Topic"
            type="text"
            fullWidth
            value={blogPostTopic}
            onChange={(e) => setBlogPostTopic(e.target.value)}
          />
          <TextField
            select
            margin="dense"
            label="Image Size"
            fullWidth
            value={imageSize}
            onChange={(e) => setImageSize(e.target.value)}
          >
            {imageSizeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Color Scheme"
            fullWidth
            value={colorScheme}
            onChange={(e) => setColorScheme(e.target.value)}
          >
            {colorSchemeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Style"
            fullWidth
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            {styleOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleGenerate}>Generate</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AutoGenerateImageModal;
