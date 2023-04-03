import React from "react";
import { Container, Typography, Button, Box, Paper, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${"/2b0555ea-e57d-4a48-816b-c063cb2eefaf.jpg"})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={"2b0555ea-e57d-4a48-816b-c063cb2eefaf.jpg"}
          alt={"2b0555ea-e57d-4a48-816b-c063cb2eefaf.jpg"}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Join Our Web Class
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Help us build an amazing learning experience for everyone.
            </Typography>
            <Link href="/volunteer-signup" passHref>
              <Button variant="contained" color="primary" size="large">
                Sign Up to Volunteer
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroSection;
