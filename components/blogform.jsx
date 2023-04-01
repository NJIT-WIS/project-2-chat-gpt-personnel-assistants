import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import AutoGenerateModal from "./AutoGenerateModal";
const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const onClearForm = () => {
    setTitle("");
    setExcerpt("");
    setDescription("");
    setImage(null);
    setTags("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("tags", tags);

    try {
      const response = await axios.post("/api/createPost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        console.log("success");
        onSubmit(formData);

        onClearForm();
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
    }
  };
  const handleAutoGenerate = async (prompt) => {
    try {
      const response = await axios.post("/api/generate_text", { prompt });
      if (response.status === 200) {
        // Assuming the generated_text is in the format: "title,excerpt,description,tags"
        const [
          generatedTitle,
          generatedExcerpt,
          generatedDescription,
          generatedTags,
        ] = response.data.generated_text.split(",");

        setTitle(generatedTitle);
        setExcerpt(generatedExcerpt);
        setDescription(generatedDescription);
        setTags(generatedTags);
      } else {
        console.error("Failed to auto-generate post details");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        multiline
        rows={4}
        margin="normal"
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="image">Image</InputLabel>
        <OutlinedInput
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <PhotoCamera />
              </IconButton>
            </InputAdornment>
          }
          label="Image"
        />
      </FormControl>
      <TextField
        label="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Create Post
      </Button>
      <AutoGenerateModal onGenerate={handleAutoGenerate} />
    </Box>
  );
};

export default BlogForm;
