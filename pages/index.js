import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Link from "next/link";
import Head from "next/head";
import FeaturedBlog from "../components/FeaturedBlogs";
import AboutUS from "../components/AboutUS";
import BaseLayout from "../layouts/BaseLayout";
import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled,
  Stack,
} from "@mui/material";

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);


const Index = (props) => {
  const [filteredBlogs, setFilteredBlogs] = useState(props.allPosts);

  const handleSearch = (filteredBlogs) => {
    setFilteredBlogs(filteredBlogs);
  };

 
  return (
    <OverviewWrapper>
      <HeaderWrapper>
        <Head>
          <title>Welcome my AI generated Site!!!!!</title>
        </Head>
      </HeaderWrapper>
      <Container maxWidth="100vh">
        <Stack spacing={4}>
          <FeaturedBlog allBlogs={props.allPosts}></FeaturedBlog>
          <AboutUS props={props.allAbouts}></AboutUS>
        </Stack>
      </Container>
    </OverviewWrapper>
  );
};

export default Index;
Index.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps() {
  const postsDirectory = `${process.cwd()}/posts`;
  const aboutDirectory = `${process.cwd()}/about`;


  const readDirectory = (directory) => {
    const fileNames = fs.readdirSync(directory);
    return fileNames.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data,
        markdownBody: content,
      };
    });
  };

  const allPosts = readDirectory(postsDirectory);
  const allAbouts = readDirectory(aboutDirectory);

  // Read the JSON data from the directory
 
  return {
    props: {
      allPosts,
      allAbouts,
   
    },
  };
}