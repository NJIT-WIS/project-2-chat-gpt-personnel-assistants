import { useState } from "react";
import { TextField, Button } from "@mui/material";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.status >= 400) {
        throw new Error("Failed to subscribe.");
      }

      setStatus("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="Email Address"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Subscribe
      </Button>
      <p>{status}</p>
    </form>
  );
};

export default NewsletterForm;
