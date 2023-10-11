import Addpost from "@/Compoents/Addpost/Addpost";
import Feed from "@/Compoents/Feed/Feed";
import NavBar from "@/Compoents/NavBar/NavBar";
import RightBar from "@/Compoents/RightBar/RightBar";
import SideBar from "@/Compoents/SideBar/SideBar";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Addpost />
    </Box>
  );
}
