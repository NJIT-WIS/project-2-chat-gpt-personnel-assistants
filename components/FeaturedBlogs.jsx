import Link from "next/link";
import ReactMarkdown from "react-markdown";

import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,Stack
} from '@mui/material';
import { useState } from 'react';

import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function truncateSummary(content) {
  return content.slice(0, 200).trimEnd();
}

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}
const CircleImageCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const CircleImage = styled(CardMedia)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: '50%',
  marginRight: theme.spacing(2),
}));

const CircleImageCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
});

const CircleImageCardTitle = styled(Typography)({
  fontWeight: 'bold',
});

const CircleImageCardDescription = styled(Typography)({
  marginTop: 'auto',
});
const FeaturedBlog = ({ allBlogs }) => {
 
  const randomPosts = allBlogs.slice(0, 2);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  }));

  return (
    <Stack
      direction="row" // display posts horizontally
      justifyContent="space-between" // evenly space the posts
      alignItems="center"
      spacing={1}
    >
      {randomPosts.length > 0 ? (
        randomPosts.map((post) => (
          <CircleImageCard>
          <CircleImage image="/creator.png" />
          <CircleImageCardContent>
            <CircleImageCardTitle variant="h5" component="h2" gutterBottom>
             test
            </CircleImageCardTitle>
            <CircleImageCardDescription variant="body1">test test testest</CircleImageCardDescription>
          </CircleImageCardContent>
        </CircleImageCard>
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
