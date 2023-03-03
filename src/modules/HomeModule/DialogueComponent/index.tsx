import { CloseIcon } from "@/components";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";

interface DialogueComponentProps {
  name?: string;
  price?: string;
  desc?: string;
  like?: boolean;
}

const montserratThin = Montserrat({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const DialogueComponent: React.FC<DialogueComponentProps> = ({
  name,
  price,
  desc,
  like,
  // @ts-ignore
  setOpen,
}) => {
  return (
    <Box
      className={montserrat.className}
      sx={{
        background: "#FFF",
        borderRadius: "16px",
        postion: "relative",
        width: { xs: "92%", md: "60%" },
        margin: { xs: "50% auto", md: "18% auto" },
        padding: { xs: "12px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "fit-content",
          right: { xs: "4%", md: "20%" },
        }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </Box>
      <p>{name}</p>
      <p style={{ marginTop: "8px" }}>{price}</p>
      <p style={{ marginTop: "8px" }} className={montserratThin.className}>
        {desc}
      </p>
    </Box>
  );
};

export default DialogueComponent;
