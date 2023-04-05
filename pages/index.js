import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Link from "next/link";
import Button from "@mui/material/Button";
import FeaturedBlog from "../components/FeaturedBlogs";
const Index = (props) => {
  const [filteredBlogs, setFilteredBlogs] = useState(props.allBlogs);

  const handleSearch = (filteredBlogs) => {
    setFilteredBlogs(filteredBlogs);
  };

  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      si
      teDescription={props.description}
    >
      <HeroSection></HeroSection>
      <section>
        <FeaturedBlog allBlogs={props.allPosts}></FeaturedBlog>
        <SearchBar allBlogs={props.allPosts} onSearch={handleSearch} />

        {filteredBlogs.length > 0 ? (
          <BlogList allBlogs={filteredBlogs} />
        ) : (
          <p>No blog posts found.</p>
        )}
      </section>
    </Layout>
  );
};

export default Index;


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

  return {
    props: {
      allPosts,
      allAbouts,
    },
  };
}