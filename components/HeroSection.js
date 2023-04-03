import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/2b0555ea-e57d-4a48-816b-c063cb2eefaf.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Join Our Web Class
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Help us build an amazing learning experience for everyone.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <Link href="/volunteer-signup" passHref>
            <Button variant="contained" color="primary" size="large">
              Sign Up to Volunteer
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
