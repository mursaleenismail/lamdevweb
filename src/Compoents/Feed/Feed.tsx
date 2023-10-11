import { Box } from "@mui/material";
import React from "react";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <Box flex={4} sx={{ padding: 0, marginLeft: 0, marginX: "0 20px" }}>
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
