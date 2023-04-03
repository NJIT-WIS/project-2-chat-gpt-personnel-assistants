import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  CardHeader,
  CardActionArea,
  CardMedia,
} from "@mui/material";

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  return (
    <Layout>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {frontmatter.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {reformatDate(frontmatter.date)}
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 500, display: { xs: "none", sm: "block" } }}
            image={frontmatter.hero_image}
            alt={"picture of blog"}
          />
          <Typography variant="subtitle1" paragraph>
            <ReactMarkdown>{markdownBody}</ReactMarkdown>
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDirectory = `${process.cwd()}/posts`;
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    console.log(slug);
    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
    fallback: false, // Return a 404 page if a path is not found
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = `${process.cwd()}/posts`;
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      frontmatter: data,
      slug: params.slug,
      markdownBody: content,
    },
  };
}
