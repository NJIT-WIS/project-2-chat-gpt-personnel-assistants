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
import AutoGenerateImageModal from "./AutoGenerateImageModal";
import Image from "next/image";
import Toast from "./toast";
import { Description } from "@mui/icons-material";

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showErrorToast, setShowErrorToast] = useState(false);
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
    if (title && excerpt && tags && image && description) {
      try {
        const response = await axios.post("/api/createPost", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.status === 200) {
          console.log("success");
          onSubmit(formData);

          onClearForm();
        } else {
          setErrorMessage("Failed to create post");
          setShowErrorToast(true);
        }
      } catch (error) {
        setErrorMessage("Failed to create post");
        setShowErrorToast(true);
      }
    }
  };

  const handleAutoGenerate = async (prompt) => {
    try {
      const response = await axios.post("/api/generate_text", { prompt });
      if (response.status === 200) {
        // Assuming the generated_text is in the format: "title,excerpt,description,tags"

        const generatedTitle = response.data.title;
        const generatedExcerpt = response.data.excerpt;
        const generatedDescription = response.data.description;
        const generatedTags = response.data.tags;
        console.log(generatedTags);

        console.log(generatedDescription);
        setTitle(generatedTitle);
        setExcerpt(generatedExcerpt);
        setDescription(generatedDescription);
        setTags(generatedTags);
        // handleAutoGenerateImage(generatedTitle);
      } else {
        setErrorMessage("Failed to auto-generate post details");
        setShowErrorToast(true);
      }
    } catch (error) {
      setErrorMessage("Failed to auto-generate post details");
      setShowErrorToast(true);
    }
  };

  const handleAutoGenerateImage = async (blogTopic) => {
    try {
      const response = await axios.post("/api/generate_image", {
        blogTopic,
      });

      if (response.status === 200) {
        // Assuming the image is returned as a base64 encoded string
        const generatedImage = response.data.generated_image_url;
        console.log(Object.keys(response.data));
        setImage(generatedImage);

        // Display the image in an img element
        const imageElement = document.getElementById("generated-image");

        imageElement.src = generatedImage;
      } else {
        setErrorMessage("Failed to auto-generate image");
        setShowErrorToast(true);
      }
    } catch (error) {
      setErrorMessage("Failed to auto-generate image");
      setShowErrorToast(true);
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
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <AutoGenerateModal onGenerate={handleAutoGenerate} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Image id="generated-image" alt="Generated blog post image" src="" />
      </Box>
    </Box>
  );
};

export default BlogForm;
