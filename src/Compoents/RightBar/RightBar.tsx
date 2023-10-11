import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import RemySharp from "../../../public/men01.jpg";
import TravisHoward from "../../../public/men06.jpg";
import CindyBaker from "../../../public/Grl02.jpg";
import AgnesWalker from "../../../public/men05.jpg";
import YuteWalkens from "../../../public/Grl01.jpg";
import TrevorHenderson from "../../../public/men02.jpg";
import { picsData } from "@/Data/dummy";

const RightBar = () => {
  return (
    <Box flex={2} sx={{ padding: 2, display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography sx={{ fontSize: "25px", fontWeight: "50px", mt: 2 }}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={RemySharp.src} />
          <Avatar alt="Travis Howard" src={TravisHoward.src} />
          <Avatar alt="Cindy Baker" src={CindyBaker.src} />
          <Avatar alt="Agnes Walker" src={AgnesWalker.src} />
          <Avatar alt="Trevor Henderson" src={YuteWalkens.src} />
          <Avatar alt="Trevor Henderson" src={TrevorHenderson.src} />
          <Avatar alt="Trevor Henderson" src={YuteWalkens.src} />
          <Avatar alt="Cindy Baker" src={CindyBaker.src} />
          <Avatar alt="Remy Sharp" src={RemySharp.src} />
        </AvatarGroup>
        <Typography sx={{ fontSize: "25px", fontWeight: "50px", mt: 2, mb: 2 }}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {picsData.map((item: any) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography sx={{ fontSize: "25px", fontWeight: "50px", mt: 2 }}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={RemySharp.src} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={TravisHoward.src} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={CindyBaker.src} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
