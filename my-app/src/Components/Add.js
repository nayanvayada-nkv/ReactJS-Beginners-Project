import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import {
  Add as AddIcon,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Styled from "@mui/styled-engine-sc";
import { Avatar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { EmojiEmotions, Image, DateRange } from "@mui/icons-material";
import { Stack } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

const StyledModal = Styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = Styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25px)", md: 30 },
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
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography varient="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} varient="span">
              Nayan Vayada
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default Add;
