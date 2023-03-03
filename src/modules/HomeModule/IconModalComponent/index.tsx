import { Box, Grid, Modal, TextField, Tooltip } from "@mui/material";
import { Montserrat } from "next/font/google";
import { BagIcon, LikeIcon } from "@/components";
import { useState } from "react";
import DialogueComponent from "../DialogueComponent";

const IconModalComponent = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      mt={2}
      sx={{ width: "fit-content", cursor: "pointer" }}
      onClick={handleOpen}
    >
      <BagIcon />
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          background: "transparent",
          ".MuiBackdrop-root": { background: "rgba(0,0,0,0.24)" },
        }}
      >
        <DialogueComponent
          {...{ setOpen }}
          name={item.name}
          price={item.price}
          desc={item.desc}
          like={item.like}
        />
      </Modal>
    </Box>
  );
};

export default IconModalComponent;
