import React, { useState } from "react";
import Layout from "../components/Layout";
import BlogForm from "../components/blogform";
import Toast from "../components/toast";

const AddBlogPosts = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (postData) => {
    // Perform validation and handle errors
    console.log(postData);

    setFormData(postData);
    setShowToast(true);
  };

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast(false);
  };

  const clearForm = () => {
    setFormData(null);
  };

  return (
    <Layout>
      <h1>Add Blog Posts!!</h1>
      <p>Please enter details below</p>
      <BlogForm onSubmit={handleSubmit} onClearForm={clearForm} />
      {errorMessage && (
        <Toast
          open={true}
          handleClose={() => setErrorMessage(null)}
          message={errorMessage}
          severity="error"
        />
      )}
      <Toast
        open={showToast}
        handleClose={handleToastClose}
        message="Post created successfully!"
        severity="success"
      />
    </Layout>
  );
};

export default AddBlogPosts;
