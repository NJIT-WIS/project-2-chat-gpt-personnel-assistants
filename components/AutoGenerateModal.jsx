import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const AutoGenerateModal = ({ onGenerate }) => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenerate = () => {
    onGenerate(prompt);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Auto Generate
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Auto Generate Post Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide a prompt for generating the post details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Prompt"
            type="text"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleGenerate}>Generate</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AutoGenerateModal;
