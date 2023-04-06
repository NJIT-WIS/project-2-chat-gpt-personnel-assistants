import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { styled } from '@mui/system';

const LayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  // Set your desired maximum viewport width
  marginLeft: 'auto',
  marginRight: 'auto',
});

const MainContent = styled(Box)({
  flexGrow: 1,
});

export const siteTitle = "MyWebClass.org";

export default function Layout({ children, home }) {
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Jonathan Grossman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
  
        <Container maxWidth="75vh"mb={2}  mt={2} >
        <AppBar position="static" color="primary" >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyWebClass.org
            </Typography>
            <Link href="/" passHref>
              <Button color="inherit" >
                Home
              </Button>
            </Link>
         
          </Toolbar>
          </AppBar>
        </Container>
   
      <Container maxWidth="75vh">
        <MainContent component="main">{children}</MainContent>
      </Container>
      {!home && (
        <Box mt={2} mb={2} textAlign="center">
          <Link href="/" passHref>
            <Button color="primary" variant="contained" >
              ← Back to home
            </Button>
          </Link>
        </Box>
      )}
    </LayoutContainer>
  );
}