import React, { useState, useEffect } from "react";
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
import Cookies from "js-cookie";
import { useHeroText } from "../hooks/useHeroText";
import InfiniteSpinner from "./InfiniteSpinner";
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const HeroSection = () => {
  const [number, setNumber] = useState(null);
  const randomIndex = getRandomIndex(4, 8);

  const { heroText, isLoading, error } = useHeroText(number);

  useEffect(() => {
    const storedNumber = Cookies.get("number");
    if (storedNumber) {
      setNumber(parseInt(storedNumber, 10));
    } else {
      const newNumber = Math.floor(Math.random() * 8) + 1;
      Cookies.set("number", newNumber, { expires: 1 });
      setNumber(newNumber);
    }
  }, []);

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
        backgroundImage: `url(${"/abstratc_woman_2.png"})`,
       
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={"creator.png"}
          alt={"creator.png"}
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
      <Container maxWidth="100vh">
        <Grid container  maxWidth="75vh" justifyContent="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Box>
                {!heroText ? (
                  <InfiniteSpinner />
                ) : (
                  <>
                    <Typography
                      component="h1"
                      variant="h2"
                      color="inherit"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        fontSize: {
                          xs: "2.5rem",
                          sm: "3.0rem",
                          md: "3.5rem",
                          lg: "4.0rem",
                        },
                      }}
                    >
                      {heroText[0].title}
                    </Typography>

                    <Typography
                      variant="h4"
                      color="inherit"
                      paragraph
                      sx={{
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1.75rem",
                          md: "2rem",
                          lg: "2.25rem",
                        },
                      }}
                    >
                      {heroText[1].subtitle}
                    </Typography>
                  </>
                )}
              </Box>
              <Typography
                variant="body1"
                color="inherit"
                paragraph
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
                }}
              >
                Below, you'll find post lessons to learn and contribute to,
                creating a better learning experience for everyone.
              </Typography>
              <Link href="/Subscribe" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    minWidth: { xs: "100%", sm: "auto" },
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.2rem",
                    },
                    py: { xs: 1, sm: "auto" },
                    mt: { xs: 2, sm: "auto" },
                  }}
                >
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
