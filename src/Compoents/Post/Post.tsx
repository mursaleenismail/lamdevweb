import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  CardActions,
  Checkbox,
} from "@mui/material";
import { MoreVert, Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { postData } from "@/Data/dummy";

const Post = () => {
  return (
    <div>
      {postData.map((item, index) => (
        <Card key={index} sx={{ margin: { md: 5, xs: "0 20px" } }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#42a5f5" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={item.title}
            subheader={item.subheader}
          />
          <CardMedia
            component="img"
            height="480"
            image={item.img}
            alt="Post Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "#d50000" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Post;
