import { Box } from "@mui/material";

const DialogueComponent = () => {
  return (
    <Box
      sx={{
        background: "#FFF",
        width: { xs: "92%", md: "60%" },
        height: { xs: "30%" },
        margin: { xs: "50% auto", md: "18% auto" },
        padding: { xs: "12px" },
      }}
    >
      <h4>Text in a modal</h4>
      <p id="modal-modal-description" style={{ marginTop: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </Box>
  );
};

export default DialogueComponent;
