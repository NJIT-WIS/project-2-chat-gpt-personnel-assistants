import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Grid from "@mui/material/Grid";

import CardMedia from "@mui/material/CardMedia";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  CardActionArea,
} from "@mui/material";
import Markdown from "./Markdown";
function truncateSummary(content) {
  return content.slice(0, 200).trimEnd();
}

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

const FeaturedBlog = ({ allBlogs }) => {
 
  const randomPosts = allBlogs.slice(0, 2);

  return (
    <Stack
      direction="row" // display posts horizontally
      justifyContent="space-between" // evenly space the posts
      alignItems="center"
      spacing={1}
    >
      {randomPosts.length > 0 ? (
        randomPosts.map((post) => (
          <CardActionArea key={post.slug}>
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.frontmatter.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                {reformatDate(post.frontmatter.date)}
                </Typography>

                <Link href={{ pathname: `/posts/${post.slug}` }}>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </Link>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  height: 200,
                  display: { xs: "none", sm: "block" },
                }}
                src={post.frontmatter.hero_image}
                alt={post.frontmatter.hero_image}
              />
            </Card>
          </CardActionArea>
        ))
      ) : (
        <Typography variant="subtitle1" color="primary">
          no posts found.
        </Typography>
      )}
    </Stack>
  );
};

export default FeaturedBlog;
