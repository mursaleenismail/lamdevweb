"use client";
import Addpost from "@/Compoents/Addpost/Addpost";
import Feed from "@/Compoents/Feed/Feed";
import NavBar from "@/Compoents/NavBar/NavBar";
import RightBar from "@/Compoents/RightBar/RightBar";
import SideBar from "@/Compoents/SideBar/SideBar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<any>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      text: {
        primary: "black",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Addpost />
      </Box>
    </ThemeProvider>
  );
}
