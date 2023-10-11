import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Pic from "../../../public/Feed/Post01.jpg";
import Pic2 from "../../../public/Feed/Post02.jpg";
import Pic3 from "../../../public/Feed/Post03.jpg";
import Pic4 from "../../../public/Feed/Post04.jpg";
import Pic5 from "../../../public/Feed/Post05.jpg";
import Pic6 from "../../../public/Feed/Post06.jpg";
import Pic7 from "../../../public/Feed/Post07.jpg";
import Pic8 from "../../../public/Feed/Post08.jpg";
import Pic9 from "../../../public/Feed/Post09.jpg";
import Pic10 from "../../../public/Feed/Post010.jpg";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={Pic.src}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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
  );
};

export default Post;
