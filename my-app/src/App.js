import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Add from "./Components/Add";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import background from "@mui/styled-engine-sc";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
