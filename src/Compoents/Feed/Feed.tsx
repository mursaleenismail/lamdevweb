import { Box } from "@mui/material";
import React from "react";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <Box flex={4} sx={{ padding: 2 }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
