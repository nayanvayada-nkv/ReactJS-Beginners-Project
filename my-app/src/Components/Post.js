import Card from "@mui/material/Card";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Post = (props) => {
  const { avatar, avatarColor, authorName, date, subTitle, likes, imageUrl } =
    props.post;
  const [like, setLike] = useState(0);
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: avatarColor }} aria-label="recipe">
              {avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={authorName}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="20%"
          image={imageUrl}
          alt="not-load"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {subTitle}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setLike(like + 1)}
            aria-label="add to favorites"
          >
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<FavoriteRoundedIcon sx={{ color: "red" }} />}
            />
          </IconButton>
          <Typography>{like}</Typography>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
export default Post;
