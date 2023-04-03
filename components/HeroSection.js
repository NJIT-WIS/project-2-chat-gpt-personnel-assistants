import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
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
        height: "75vh",
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
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      />
      <Container maxWidth="lg">
        <Grid container alignItems="center" style={{ height: "100%" }}>
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
                variant="h2"
                color="inherit"
                fontWeight="bold"
                gutterBottom
              >
                Unleash Your Creativity
              </Typography>
              <Typography variant="h4" color="inherit" paragraph>
                Shape the future by contributing your innovative ideas to our
                web class.
              </Typography>
              <Typography variant="body1" color="inherit" paragraph>
                Below, you'll find post lessons to learn and contribute to,
                creating a better learning experience for everyone.
              </Typography>
              <Link href="/Subscribe" passHref>
                <Button variant="contained" color="primary" size="large">
                  Join as a Creator
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 3,
          right: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Paper>
  );
};
export default HeroSection;
