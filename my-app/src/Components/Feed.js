import React from "react";
import Post from "./Post";
import Box from "@mui/material/Box";
import data from "../data";

function Feed() {
  return (
    <Box flex={3} p={2}>
      {data.map((post) => (
        <Post post={post} key={post.authorName} />
      ))}
    </Box>
  );
}

export default Feed;
