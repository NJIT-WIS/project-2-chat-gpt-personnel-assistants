import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  IconButton,styled
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
const HeroSection = ()=> {
  const [heroText, setHeroText] = useState(null);
  const [heroTitle, setHeroTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [number, setNumber] = useState(null);
  const CustomButton = styled(Button)({
    background: "#112826",
    border: "3px solid #233A39",
    borderRadius: "31px",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "uppercase",
    "&:hover": {
      background: "#233A39",
      border: "3px solid #233A39",
    },
  });
  useEffect(() => {
    const storedNumber = Cookies.get("number");
    if (storedNumber) {
      setNumber(parseInt(storedNumber, 10));
    } else {
      const newNumber = Math.floor(Math.random() * 8) + 1;
      Cookies.set("number", newNumber, { expires: 1 });
      setNumber(newNumber);
    }

    const fetchHeroText = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/searchArchetype?indexName=creator${number}`);
        const data = await response.json();
        console.log(data.heroText.hero_texts[0].title);
        const title=data.heroText.hero_texts[0].title;
        const content= data.heroText.hero_texts[1].subtitle;
        setHeroTitle(title);
        setHeroText(content);
        console.log(heroText);
        console.log(heroTitle);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    if (number) {
      fetchHeroText();
    }
  }, [number]);



  return (
    <Paper
    sx={{
      position: "relative",
      backgroundColor: "grey.800",
      color: "#fff",
      mb: 4,
      mt:4,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${"/abstratc_woman_2.png"})`,
      height: "100%", // set height here
      width: "100%", // set width here

    
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
                        fontFamily: '"Victor Mono", monospace'
                      }}
                    >
                        {heroTitle}
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
                        fontFamily: '"Victor Mono", monospace'
                      }}
                      
                    >
                             {heroText}
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
                  fontFamily: '"Victor Mono", monospace'
                }}
              >
                Below, you'll find post lessons to learn and contribute to,
                creating a better learning experience for everyone.
              </Typography>
              <Link href="/Subscribe" passHref>
                <CustomButton
                
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
                </CustomButton>
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
