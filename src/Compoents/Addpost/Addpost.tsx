"use client";
import {
  Add as AddIcon,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { StyledModal, UserBox } from "./Styled";
import AvatarImg from "../../../public/men02.jpg";

const Addpost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          transform: { xs: "translateX(-50%)" },
          left: {
            xs: "50%",
            md: 40,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="white"
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 32, height: 32 }} src={AvatarImg.src} />
            <Typography>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};

export default Addpost;
