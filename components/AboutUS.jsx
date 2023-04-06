import * as React from 'react';
import PropTypes from 'prop-types';

import Markdown from './Markdown';
import {
  Card,
  CardContent,
  Typography,
  Stack,
  CardHeader,
  CardActionArea,
  CardMedia,Container, Box
} from "@mui/material";
const AboutUS = ({ props }) =>  {

 console.log("props",props[0].frontmatter.title);
  return (
    <Box sx={{ width: '75%',mt: 4}}>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
       {props[0].frontmatter.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
 
          </Typography>
         
          <Markdown className="markdown" >
          {props[0].markdownBody} 
          </Markdown>
        </CardContent>
      </Card>
      </Box>
  );
}


export default AboutUS;